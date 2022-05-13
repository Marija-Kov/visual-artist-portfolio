<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>/\/\&lt;&deg; &middot;&middot; Marija Kov &middot;&middot; Contact</title>
</head>
<body>
<div class="contact-container">
    <form action="sendmessage.php" 
       method="post" 
       name="contactForm" 
       id="contactForm"
       >
       <!-- <label for="firstname">Your name</label>  -->
       <input 
          type="text" 
          name="firstname" 
          id="firstname" 
          class="form-element" 
          placeholder="Your name"
          required
          />
        
        <!-- <label for="email">Email</label> -->
        <input 
           type="email" 
           name="email" 
           id="email" 
           class="form-element" 
           placeholder="Your email@address.com"
           required
           />
        <!-- <label for="message">Message</label> -->
        <textarea 
           name="message" 
           id="message" 
           class="form-element"
           required
           placeholder="Tell me about your project ideas."></textarea>
        
        <input type="text" name="_honey" style="display:none">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://marija-kovacevic.netlify.app/pages/thankyou.html">
        <button type="submit">send</button>
    </form>
    </div>
</body>
</html>
