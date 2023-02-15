// Class is just like a reservation form, Aapne agar form bhar diya toh wo object hai ab koi or uss form ka use nahi kar sakta hai, Object ek class se bana hua entity hai
class RailwayForm{
    submit( ){
        alert(this.name + " : This form is submitted with train no. : " + this.trainNo)
    }
    cancel( ){
        alert(this.name + " : Your form is cancelled with train no. : " + this.trainNo)
    }
    fill(givenName, trainNo){
        this.name = givenName
        this.trainNo = trainNo
    }
}
let harryForm = new RailwayForm( )
harryForm.fill("Harry", 12345)
let rithikForm1 = new RailwayForm( )
let rithikForm2 = new RailwayForm( )
rithikForm1.fill("Rithik", 54321)
rithikForm2.fill("Rithik", 64321)

harryForm.submit( )
rithikForm1.submit( )
rithikForm2.submit( )
rithikForm1.cancel( )