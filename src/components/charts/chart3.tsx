import { TrendingUp, LoaderCircle } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ReportsAreaChart({ 
  reports, 
  medium_value, 
  isLoading 
}: { 
  reports: any[], 
  medium_value: number, 
  isLoading?: boolean 
}) {
  const chartData = reports.map(report => ({
    timestamp: new Date(report.timestamp).toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }),
    value: report.value,
    originalTimestamp: report.timestamp
  }))

  return (
    <Card className="w-full bg-black text-white relative">
      {isLoading && !reports?.length && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoaderCircle className="animate-spin" color="white" size={42} />
        </div>
      )}
      <CardHeader>
        <CardTitle>Reports Overview</CardTitle>
        <CardDescription>
          Showing individual report values
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={450}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            style={{
              background: 'black',
              opacity: isLoading && !reports?.length ? 0.3 : 1
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval="preserveStartEnd"
              style={{
                color: '#ccc',
              }}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickMargin={8}
              style={{
                color: '#ccc',
              }}
            />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload
                  return (
                    <div className="bg-black p-4 shadow-lg rounded-lg text-white">
                      <p>Timestamp: {data.timestamp}</p>
                      <p>Value: {data.value}</p>
                    </div>
                  )
                }
                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#4e6aff"
              fill="#4e6aff"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Reports Overview. Average: {medium_value.toFixed(2)}<TrendingUp className="h-4 w-4"  />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {reports?.length > 0 ? (
                `${new Date(reports[0].timestamp).toLocaleDateString()} - ${new Date(reports[reports.length-1].timestamp).toLocaleDateString()}`
              ) : (
                'No data available'
              )}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}