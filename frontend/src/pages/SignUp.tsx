
import AuthForm from "@/components/auth/AuthForm";
import MainLayout from "@/components/layout/MainLayout";

const SignUp = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-eco-green-50 to-white py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-eco-green-800">Join E-WasteAid</h1>
            <p className="text-eco-green-600 mt-2">Create your account to start recycling e-waste responsibly</p>
          </div>
          <AuthForm type="signup" />
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
