import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import Address from './address'
import SocialLinks from './updatePassword'
import GeneralInfo from './generalInfo'
import AccountDetails from './bankDetails'
import { FileText, User, MapPin, Link } from 'react-feather'
import KYC from './kyc'

const WizardModern = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'general-info',
      title: 'General Information',
      subtitle: 'Enter General Information',
      icon: <FileText size={18} />,
      content: <GeneralInfo stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'bank-details',
      title: 'Bank Details',
      subtitle: 'Add Bank Details',
      icon: <User size={18} />,
      content: <AccountDetails stepper={stepper} type='wizard-modern' />
    },
    {
        id: 'kyc',
        title: 'KYC',
        subtitle: 'Add Kyc',
        icon: <User size={18} />,
        content: <KYC stepper={stepper} type='wizard-modern' />
    },
    {
        id: 'update-password',
        title: 'Update Password',
        subtitle: 'Update Password',
        icon: <Link size={18} />,
        content: <SocialLinks stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='wizard-modern' />
    }
  ]

  return (
    <div className='modern-horizontal-wizard mx-2'>
        <h2>Edit your Profile</h2>
      <Wizard
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModern
