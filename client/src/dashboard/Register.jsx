import React from 'react';
import { register } from './UserFunctions'


export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
          first_name: '',
          last_name: '',
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
    
        const newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password
        }
    
        register(newUser).then(res => {
          this.props.history.push(`/login`)
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
                                    <input type="text" class="form-control-input" id="rname" name="first_name" required  value={this.state.first_name}
                  onChange={this.onChange}/>
                                    <label class="label-control" for="rname"> First name</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control-input" id="rname" name="last_name" required  value={this.state.last_name}
                  onChange={this.onChange}/>
                                    <label class="label-control" for="rname"> Last name</label>
                                    <div class="help-block with-errors"></div>
                                </div>
                                
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
                                    <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />I agree with Evolo's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
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