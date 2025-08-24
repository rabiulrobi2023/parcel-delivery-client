import AccountLayout from "@/layout/AccountLayout";
import { RegistrationForm } from "@/modules/RegistrationForm/RegistrationForm";

const Registration = () => {
  return (
    <AccountLayout>
     <div className=" flex flex-col container mx-auto">
       <RegistrationForm></RegistrationForm>
     </div>
    </AccountLayout>
  );
};

export default Registration;
