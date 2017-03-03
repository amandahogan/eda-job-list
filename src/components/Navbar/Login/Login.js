import React from 'react'
import { Button, Icon, Menu, Modal } from 'semantic-ui-react'

class Login extends React.Component {
  render () {
    const { login } = this.props
    return (
      <Modal trigger={<Menu.Item>Login</Menu.Item>}>
        <Modal.Header>Sign in</Modal.Header>
        <Modal.Content>
          <Button color='black' onClick={() => login({})}>
            GitHub <Icon name='github' />
          </Button>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Login
