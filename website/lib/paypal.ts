// PayPal Integration Structure
// This file contains the structure and hooks for PayPal integration

export interface PayPalConfig {
  clientId: string;
  currency: string;
  intent: "CAPTURE" | "AUTHORIZE";
  enableFunding?: string[];
  disableFunding?: string[];
}

export interface PayPalOrder {
  id: string;
  status: string;
  purchase_units: PayPalPurchaseUnit[];
}

export interface PayPalPurchaseUnit {
  amount: {
    currency_code: string;
    value: string;
    breakdown?: PayPalAmountBreakdown;
  };
  description: string;
  items?: PayPalItem[];
}

export interface PayPalAmountBreakdown {
  item_total: {
    currency_code: string;
    value: string;
  };
  tax_total?: {
    currency_code: string;
    value: string;
  };
  shipping?: {
    currency_code: string;
    value: string;
  };
  handling?: {
    currency_code: string;
    value: string;
  };
  insurance?: {
    currency_code: string;
    value: string;
  };
  shipping_discount?: {
    currency_code: string;
    value: string;
  };
  discount?: {
    currency_code: string;
    value: string;
  };
}

export interface PayPalItem {
  name: string;
  unit_amount: {
    currency_code: string;
    value: string;
  };
  quantity: string;
  description?: string;
  category?: "DIGITAL_GOODS" | "PHYSICAL_GOODS";
}

export interface PayPalPaymentSource {
  card?: {
    name: string;
    number: string;
    expiry: string;
    security_code: string;
    billing_address?: PayPalAddress;
  };
  paypal?: {
    experience_context?: {
      brand_name?: string;
      locale?: string;
      landing_page?: "LOGIN" | "BILLING" | "NO_PREFERENCE";
      user_action?: "PAY_NOW" | "CONTINUE";
      payment_method_preference?: "IMMEDIATE_PAYMENT_REQUIRED" | "UNRESTRICTED";
    };
  };
  venmo?: {
    experience_context?: PayPalExperienceContext;
  };
  applepay?: {
    experience_context?: PayPalExperienceContext;
  };
  card?: {
    experience_context?: PayPalExperienceContext;
  };
}

export interface PayPalExperienceContext {
  brand_name?: string;
  locale?: string;
  landing_page?: "LOGIN" | "BILLING" | "NO_PREFERENCE";
  user_action?: "PAY_NOW" | "CONTINUE";
  payment_method_preference?: "IMMEDIATE_PAYMENT_REQUIRED" | "UNRESTRICTED";
  shipping_preference?: "NO_SHIPPING" | "GET_FROM_FILE" | "SET_PROVIDED_ADDRESS";
}

export interface PayPalAddress {
  address_line_1: string;
  address_line_2?: string;
  admin_area_2: string;
  admin_area_1: string;
  postal_code: string;
  country_code: string;
}

// PayPal configuration - replace with your actual PayPal Client ID
export const paypalConfig: PayPalConfig = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "YOUR_PAYPAL_CLIENT_ID",
  currency: "USD",
  intent: "CAPTURE",
  enableFunding: ["card", "venmo", "applepay"],
  disableFunding: ["credit", "paylater"],
};

// PayPal SDK initialization
export const initPayPal = () => {
  if (typeof window !== "undefined" && !document.querySelector("#paypal-sdk")) {
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    const fundingParams = paypalConfig.enableFunding?.join(",") || "";
    const disableParams = paypalConfig.disableFunding?.join(",") || "";
    
    let sdkUrl = `https://www.paypal.com/sdk/js?client-id=${paypalConfig.clientId}&currency=${paypalConfig.currency}`;
    
    if (fundingParams) {
      sdkUrl += `&enable-funding=${fundingParams}`;
    }
    if (disableParams) {
      sdkUrl += `&disable-funding=${disableParams}`;
    }
    
    script.src = sdkUrl;
    script.async = true;
    document.body.appendChild(script);
  }
};

// Create PayPal order
export const createPayPalOrder = async (
  totalAmount: number,
  items: { name: string; unitAmount: number; quantity: number }[],
  taxAmount: number = 0
): Promise<PayPalOrder> => {
  const paypalItems: PayPalItem[] = items.map(item => ({
    name: item.name,
    unit_amount: {
      currency_code: paypalConfig.currency,
      value: item.unitAmount.toFixed(2),
    },
    quantity: item.quantity.toString(),
    category: "DIGITAL_GOODS",
  }));

  const breakdown: PayPalAmountBreakdown = {
    item_total: {
      currency_code: paypalConfig.currency,
      value: items.reduce((sum, item) => sum + item.unitAmount * item.quantity, 0).toFixed(2),
    },
  };

  if (taxAmount > 0) {
    breakdown.tax_total = {
      currency_code: paypalConfig.currency,
      value: taxAmount.toFixed(2),
    };
  }

  // This would typically call your backend API
  // For now, return a mock order structure
  return {
    id: `ORDER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    status: "CREATED",
    purchase_units: [
      {
        amount: {
          currency_code: paypalConfig.currency,
          value: totalAmount.toFixed(2),
          breakdown,
        },
        description: "Pulse Tweaks Purchase",
        items: paypalItems,
      },
    ],
  };
};

// Capture PayPal payment
export const capturePayPalPayment = async (orderId: string): Promise<any> => {
  // This would typically call your backend API
  // For now, return a mock response
  return {
    status: "COMPLETED",
    id: orderId,
    purchase_units: [
      {
        payments: {
          captures: [
            {
              id: `CAPTURE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
              status: "COMPLETED",
              amount: {
                value: "20.00",
                currency_code: "USD",
              },
            },
          ],
        },
      },
    ],
  };
};

// Create subscription
export const createPayPalSubscription = async (
  planId: string,
  returnUrl: string,
  cancelUrl: string
): Promise<any> => {
  // This would typically call your backend API
  // For now, return a mock subscription
  return {
    id: `SUB-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    status: "APPROVED",
    links: [
      {
        rel: "approve",
        href: returnUrl,
      },
    ],
  };
};

// Get PayPal subscription plans
export const getPayPalPlans = async (): Promise<any[]> => {
  // This would typically call your backend API
  // For now, return mock plans
  return [
    {
      id: "P-PRO-MONTHLY",
      name: "Pro Monthly",
      description: "Monthly Pro subscription",
      billing_cycles: [
        {
          frequency: {
            interval_unit: "MONTH",
            interval_count: 1,
          },
          tenure_type: "REGULAR",
          sequence: 1,
          total_cycles: 0,
          pricing_scheme: {
            fixed_price: {
              value: "20.00",
              currency_code: "USD",
            },
          },
        },
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        setup_fee_failure_action: "CONTINUE",
        payment_failure_threshold: 3,
      },
    },
    {
      id: "P-PRO-YEARLY",
      name: "Pro Yearly",
      description: "Yearly Pro subscription",
      billing_cycles: [
        {
          frequency: {
            interval_unit: "YEAR",
            interval_count: 1,
          },
          tenure_type: "REGULAR",
          sequence: 1,
          total_cycles: 0,
          pricing_scheme: {
            fixed_price: {
              value: "180.00",
              currency_code: "USD",
            },
          },
        },
      ],
      payment_preferences: {
        auto_bill_outstanding: true,
        setup_fee_failure_action: "CONTINUE",
        payment_failure_threshold: 3,
      },
    },
  ];
};

// PayPal error handling
export interface PayPalError {
  name: string;
  message: string;
  details?: {
    issue: string;
    description: string;
    field?: string;
  }[];
}

export const handlePayPalError = (error: PayPalError): string => {
  console.error("PayPal Error:", error);
  
  // Return user-friendly error messages
  if (error.details && error.details.length > 0) {
    return error.details[0].description || error.message;
  }
  
  switch (error.name) {
    case "INVALID_RESOURCE_ID":
      return "Invalid payment information. Please try again.";
    case "PAYMENT_ALREADY_DONE":
      return "This payment has already been processed.";
    case "PAYMENT_DECLINED":
      return "Payment was declined. Please try a different payment method.";
    case "INVALID_PAYER_ID":
      return "Invalid payment details. Please verify your information.";
    default:
      return error.message || "An error occurred with PayPal. Please try again.";
  }
};

// Check if PayPal is available
export const isPayPalAvailable = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!(window as any).paypal;
};
