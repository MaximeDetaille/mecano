import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import PictureUpdate from '../PictureUpdate';
import { registerMecano, goToStep, registrationError } from '../../actions/index';
import { Header, Loader, RadioButtons, Input } from '../../common/index';

class MecanoRegistration extends Component {
  componentDidMount(){
    //SET GOOGLE-PLACE-AUTOCOMPLETE ON THE ADDRESS FIELD
    var input = document.getElementById('searchTextField');
    var options = {componentRestrictions: {country: 'fr'}};
    new google.maps.places.Autocomplete(input, options);
    //DON'T SUBMIT ON PRESS-ENTER IN AUTOCOMPLETE
    $('body').keypress(function(e){
      if (e.keyCode == '13') {
         e.stopPropagation();
       }
    });
  }
  submit(values){
    if(values.full_address){
      const splitted_address = values.full_address.split(',');
      values['mobile'] = this.props.mobile;
      values['pro'] = this.props.pro;
      values['country'] = splitted_address[splitted_address.length-1];
      values['city'] = splitted_address[splitted_address.length-2];
      values['address'] = splitted_address[splitted_address.length-3];
    }else{
      registrationError({errors: "Saisissez une addresse"});
    }
    this.props.registerMecano(values)
  }

  render(){
    const { handleSubmit, step, goToStep, errors, pro, mobile } = this.props;
    return (
      <div>
        <Header>Enregistrement mécano {step}/3</Header>
        <div className="container">
          <form onSubmit={handleSubmit(values => this.submit(values))}>
            <div className="col s12 l6 text-center">
              <br/>
              <h2>Mes domaines de compétences</h2>
              <h3>Véhicules</h3>
            </div>
            <div className="col s12">
              <p className="red-text">{errors ? errors[0] : ''}</p>
              <div className="space-between">
                <div></div>
                <a onClick={handleSubmit(values => this.submit(values))} className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">keyboard_arrow_right</i></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerMecano, goToStep, registrationError }, dispatch);
}


function mapStateToProps(state) {
  const { mecano_registration } = state.form
  const { step, errors } = state.mecano
  return {
    mobile: (mecano_registration && mecano_registration.values && (mecano_registration.values.mobile === "oui")),
    pro: (mecano_registration && mecano_registration.values && (mecano_registration.values.pro === "professionnel")),
    step,
    errors
  }
}

MecanoRegistration = reduxForm({
  form: 'mecano_registration'
})(connect(mapStateToProps, mapDispatchToProps)(MecanoRegistration));

export MecanoRegistration;