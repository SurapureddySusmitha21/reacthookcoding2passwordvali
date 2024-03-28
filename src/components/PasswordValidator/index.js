// Write your code here
import {useState} from 'react'

import {
  Bgcontainer,
  PasswordValidContainer,
  PasswordHeading,
  PasswordParagraph,
  PasswordInput,
  PasswordErrorParagraph
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPasswordInput] = useState('')

  const findValueTrue = passwordInput.length < 8

  const getPasswordInput = event => {
    setPasswordInput(event.target.value)
  }

  return (
    <Bgcontainer>
      <PasswordValidContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
         <PasswordParagraph>
            check how strong and secure is your password
          </PasswordParagraph>
        <PasswordInput
          type="password"
          onChange={getPasswordInput}
          value={passwordInput}
        />
        {findValueTrue && (
          <PasswordErrorParagraph>
            Your password must be at least 8 characters
          </PasswordErrorParagraph>
        )}

      </PasswordValidContainer>
    </Bgcontainer>
  )
}
export default PasswordValidator
