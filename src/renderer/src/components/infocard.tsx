import { cn } from "@/lib/utils"
import Card from "./ui/Card"
import { LucideIcon } from "lucide-react"

interface InfoCardItem {
  label: string
  value: string
}

interface InfoCardProps {
  icon: LucideIcon
  iconBgColor?: string
  iconColor?: string
  title: string
  subtitle?: string
  items?: InfoCardItem[]
  className?: string
  [key: string]: any
}

const InfoCard = ({
  icon: Icon,
  iconBgColor = "bg-purple-500/10",
  iconColor = "text-purple-400",
  title,
  subtitle,
  items = [],
  className,
  ...props
}: InfoCardProps): React.ReactElement => {
  return (
    <Card
      className={cn(
        "bg-void-card/60 backdrop-blur-xl rounded-3xl border border-void-border hover:border-void-primary/30 transition-all duration-500 group hover:shadow-2xl hover:shadow-purple-900/10 p-6",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={cn("p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 shadow-inner", iconBgColor)}>
          <Icon className={cn("transition-colors duration-500", iconColor)} size={28} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="text-void-text-muted text-xs font-semibold uppercase tracking-wider">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white/5 p-3 rounded-xl border border-white/5 group-hover:bg-white/[0.07] transition-colors">
            <p className="text-void-text-muted text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
            <p className="text-white font-medium text-sm truncate">{item.value}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default InfoCard
