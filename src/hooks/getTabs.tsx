import { LoginForm, RegisterForm } from '@/components'
import { RegistrationTabEnum } from '@/pages'
import React from 'react'
import { useState } from 'react'


export default function useGetTabs() {
    const [currentTab, setCurrentTab] = useState<RegistrationTabEnum>(RegistrationTabEnum.register)
    const changeTab = (value: RegistrationTabEnum) => {
        setCurrentTab(value)
    }
  const getTab = (value: RegistrationTabEnum) => {
    switch (value) {
      case RegistrationTabEnum.register:
        return <RegisterForm changeTab={changeTab} />
      case RegistrationTabEnum.login:
        return <LoginForm />
    }
  }

    
  return {changeTab, getTab, currentTab}


}