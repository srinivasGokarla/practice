const createMember = ({ email, address = {}}) => {
const validEmail = /.+\@.+\..+/.test(email)
if(!validEmail) throw new Error("valid please")
return{
    email,
    address: address?address:null
}
}
const member = createMember({email:"my@eamil.com" , address:"my@eamil.com"})
console.log(member)