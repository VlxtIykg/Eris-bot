# Eris-bot

This is purely for me to learn the extent of eris until interactions are forced.

# Process of what has been done

I haven't uploaded to github in 8 days, what I have done is

-Create a json and env parser <br>
-Create a database with a table of how I want things to be <br>
-Maneuver certain stuff to export and import <br>
-Learnt how to remove Module: null prototype   <br>
<sub>
What causes Module null prototype? Importing two things asynchronously. (Even when you are importing in same file with an await)<br>
How to get rid of it? Run the functions separately at different times 
<bold>or</bold><br>
Call the await import in one function and export it to the two async functions<br>
<bold>Or</bold><br>
# Best method to bypass module null prototype
Create a variable that is targetting the class name i.e.
<img src="/images/bypassNullPrototypeReadMe.png" alt="Image on how to bypass module null prototype by calling class name">
Call the variable!
How to know what to call?
<img src="/images/findClass.png" alt="Image on what class name to call">
The second line with "ClassName": [class yourClassName ?. extends otherClassName]
</sub>
-Add a command handler