import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates.html';
import './templates.js';

import '../collections/collections.js'



var myData = {
	"_id": "JCLkSCzntZWQ49ofc",
	"array_index": 0,
	"fsm": {
		"state": 73,
		"control": {
			"should_run_background": true,
			"should_mask_data_tone_tx_eq": true
		},
		"flags": {
			"cheq_done_flag": false,
			"cheq_onoff_flag": false
		}
	},
	"sto": {
		"times_sto_estimated": 85,
		"sto_estimated": 16383
	},
	"sfo": {
		"sfo_estimated": -5.3852e-7,
		"sfo_estimated_sent": 0,
		"times_sfo_estimated": 85,
		"times_sfo_sent": 0,
		"applied_sfo": false
	},
	"cfo": {
		"cfo_estimated": 35.809,
		"cfo_estimated_sent": 35.809,
		"times_cfo_sent": 0,
		"times_cfo_estimated": 85
	},
	"demod": {
		"demod_est_common_phase": 0
	}
}

var myData2 = {
	"_id": "8s8ufBkcwKms378y2",
	"array_index": 1,
	"sto": {
		"times_sto_estimated": 85,
		"sto_estimated": 16383
	},
	"sfo": {
		"sfo_estimated": 0.0000200633,
		"sfo_estimated_sent": 0,
		"times_sfo_estimated": 85,
		"times_sfo_sent": 0,
		"applied_sfo": false
	},
	"cfo": {
		"cfo_estimated": -17.6617,
		"cfo_estimated_sent": -17.6617,
		"times_cfo_sent": 0,
		"times_cfo_estimated": 85
	},
	"fsm": {
		"state": 73,
		"control": {
			"should_run_background": true,
			"should_mask_data_tone_tx_eq": true
		},
		"flags": {
			"cheq_done_flag": false,
			"cheq_onoff_flag": false
		}
	},
	"demod": {
		"demod_est_common_phase": 0
	}
}


MyCollection.insert(myData);
MyCollection.insert(myData2);

var getCollection = MyCollection.find().fetch();
console.log(getCollection);

Meteor.startup(function () {

   if(Meteor.isClient) {
      var myNewTemplate = Template.myNewTemplate;
  
  var arrayGetterId=0;    
	
	
   
      // This code only runs on the client
     Template.myNewTemplate.helpers({
        id: getCollection[arrayGetterId]._id,
        array_index: getCollection[arrayGetterId].array_index,
        state: getCollection[arrayGetterId].fsm.state,
        should_run_background: getCollection[arrayGetterId].fsm.control.should_run_background.toString(),
        should_mask_data_tone_tx_eq: getCollection[arrayGetterId].fsm.control.should_mask_data_tone_tx_eq.toString(),
        cheq_done_flag: getCollection[arrayGetterId].fsm.flags.cheq_done_flag.toString(),
        cheq_onoff_flag: getCollection[arrayGetterId].fsm.flags.cheq_onoff_flag.toString(),
        times_sto_estimated: getCollection[arrayGetterId].sto.times_sto_estimated,
        sto_estimated: getCollection[arrayGetterId].sto.sto_estimated,
        sfo_estimated: getCollection[arrayGetterId].sfo.sfo_estimated,
        sfo_estimated_sent: getCollection[arrayGetterId].sfo.sfo_estimated_sent,
        times_sfo_estimated: getCollection[arrayGetterId].sfo.times_sfo_estimated,
        times_sfo_sent: getCollection[arrayGetterId].sfo.times_sfo_sent,
        applied_sfo: getCollection[arrayGetterId].sfo.applied_sfo.toString(),
        cfo_estimated: getCollection[arrayGetterId].cfo.cfo_estimated,
        cfo_estimated_sent: getCollection[arrayGetterId].cfo.cfo_estimated_sent,
        times_cfo_sent: getCollection[arrayGetterId].cfo.times_cfo_sent,
        times_cfo_estimated: getCollection[arrayGetterId].cfo.times_cfo_estimated,
        demod_est_common_phase: getCollection[arrayGetterId].demod.demod_est_common_phase,
     });

    
   
      var myContainer = document.getElementById('myContainer');
      Blaze.renderWithData(myNewTemplate, myData2, myContainer);
      
     
   }
});




Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
