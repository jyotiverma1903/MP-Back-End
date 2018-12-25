 
 const nodemailer = require('nodemailer');

    let sendMail = (receiverDetails , cb) => {

        let transporter = nodemailer.createTransport({
    
            host : 'smtp.gmail.com',
            port: 465,
            auth : {
                user : "edwisoremails@gmail.com",
                pass : 'mymeeting'
            },
            tls:{
                rejectUnauthorized: false
            }
        });
        
        let receiverEmailId = receiverDetails.emailId;
        console.log(receiverEmailId);
        let receiverChangePassToken = receiverDetails.token;
    
        const mailOptions = {
            from: 'edwisoremails@gmail.com', // sender address
            to: receiverEmailId, // list of receivers
            subject: 'Password Reset Url', // Subject line
            html: `<p>Reset Password Link.</p>
            <a>http://jyotivermprojects.info/changepassword/${receiverChangePassToken}</a>
            `// plain text body
        };
    
        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.log("nodemailer error "+err);
                cb(err,null);
            }else{
                console.log("nodemailer success"+ info );
                cb(null,info);
            }
             
         });
    
    
    }
    // send mail end

    let sendMeetingInfo = (receiverDetails , cb) => {

        let transporter = nodemailer.createTransport({
    
            host : 'smtp.gmail.com',
            port: 465,
            auth : {
                user : "edwisoremails@gmail.com",
                pass : 'mymeeting'
            },
            tls:{
                rejectUnauthorized: false
            }
        });
        
        let receiverEmailId = receiverDetails.receiverEmail;
        let receiverSubject = receiverDetails.subject;
        let receiverMessage = receiverDetails.message;
        
    
        const mailOptions = {
            from: 'edwisoremails@gmail.com', // sender address
            to: receiverEmailId, // list of receivers
            subject: receiverSubject, // Subject line
            html: `<p>${receiverMessage}</p>`// plain text body
        };
    
        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                console.log("nodemailer error "+err);
                cb(err,null);
            }else{
                console.log("nodemailer success"+ info );
                cb(null,info);
            }
             
         });
    
    
    }
    // send meeting info end

    module.exports =  {
        sendMail : sendMail,
        sendMeetingInfo : sendMeetingInfo
    }