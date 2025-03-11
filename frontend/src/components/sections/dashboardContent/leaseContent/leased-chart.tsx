import InfoAlertIcon from '@/components/common/info-alert-icon'
import ChartA from '../entryPointContent/chart-a'

function LeasedCharts() {
  return (
    <div className='w-full bg-[#252B36] h-auto p-5 rounded-[10px] '>
         <InfoAlertIcon name='Songs leased/Month'/>

         <ChartA/>
    </div>
  )
}

export default LeasedCharts