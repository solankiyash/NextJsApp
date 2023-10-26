import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/Utils/db"
import User from "@/models/User"
import bycrypt from "bcryptjs"


const handler =  NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:  process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
        console.log(credentials,"credentials")
        await connect();

        try {
          const user = await User.findOne({email:credentials.email});

          if(user){
            const ispasswordCorrect = await bycrypt.compare(credentials.password,user.password);
            if(ispasswordCorrect){
              return user;
            }else{
              throw new Error ("Wrong Credential")
            }
          }else{
            throw new Error("User not found!")
          }
        } catch (error) {
          
        }
      }
    })
    
  ],
  pages:{
    error:"/dashboard/login"
  }
})

export {handler as GET,handler as POST}