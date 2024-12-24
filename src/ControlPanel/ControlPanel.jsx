import './ControlPanel.css'
import ControlPanelInfo from './ControlPanelInfo'


function ControlPanel () {
return <div className='ControlPanel'>
{
    ControlPanelInfo.map((item , index) => <a className='ControlPanel__Link' href={item.href}>{item.icon}</a> )
}

</div>
}

export default ControlPanel