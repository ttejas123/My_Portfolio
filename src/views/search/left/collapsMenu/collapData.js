import { CardText } from 'reactstrap'
import AppCollapse from '@components/app-collapse'

const data = [
  {
    title: <b>Shoes</b>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <b>T-Shirts & Polos</b>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <b>Jeans</b>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <b>Kurta</b>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  },
  {
    title: <b>Frame</b>,
    content: (
      <CardText className='mb-0'>
        <div className="ml-2">Biopsy Tools</div><hr />
        <div className="ml-2">Endoscopes</div><hr />
        <div className="ml-2">Monitoring</div><hr />
        <div className="ml-2">Otoscopes</div><hr />
        <div className="ml-2">Oxygen Concentrators</div><hr />
        <div className="ml-2">Tables And Assistants</div><hr />
        <div className="ml-2">Thermometer</div>
      </CardText>
    )
  }
]

const CollapseDefault = () => <AppCollapse data={data} />

export default CollapseDefault
