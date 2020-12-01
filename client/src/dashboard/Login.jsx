import React from 'react';
import { login } from './UserFunctions'


export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const user = {
          email: this.state.email,
          password: this.state.password
        }
        login(user).then(res => {
            if (res) {
               
              this.props.history.push(`/`)
            }
          })
        }    
    render() {
        
            return (
                         

       <div id="request" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    
                </div> 
                <div class="col-lg-6">

                 
                    <div class="form-container">
                        <form id="requestForm" data-toggle="validator" data-focus="false" onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <input type="text" class="form-control-input" id="rname" name="email" required  value={this.state.email}
                  onChange={this.onChange}/>
                                <label class="label-control" for="rname"> Email</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            
                           
                            <div class="form-group">
                                <input type="password" class="form-control-input" id="rphone" name="password" value={this.state.password}
                  onChange={this.onChange} required />
                                <label class="label-control" for="rphone">Password</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            
                            <div class="form-group checkbox">
                                <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />I agree with Nabeul smart city 's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">Login</button>
                            </div>
                            <div class="form-message">
                                <div id="rmsgSubmit" class="h3 text-center hidden"></div>
                            </div>
                        </form>
                    </div> 
                    

                </div> 
            </div> 
        </div> 
    </div> 
   
      
       
  
            )
        }
    }

