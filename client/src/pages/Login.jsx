import { ModeToggle } from "@/components/mode-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const navigate = useNavigate();
  async function submit(){
    const backendurl = import.meta.env.Backendurl;
    try {
        const { data } = await axios.post(`${backendurl}/user/login`, {
        identifier: username,
        password: password,
      });

    navigate("/chats");
    toast.success("Successfully Login your account");
    } catch (error) {
       toast.error(error.response.data);
       
    }
   
  }
  return (
    <div className="flex  items-center justify-center h-screen w-screen">
      <Card className="md:w-96  ">
        <CardHeader>
          <CardTitle>Login </CardTitle>
          <CardDescription>
            New to Website?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-start gap-1 space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-start gap-1 space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/"}>
            <Button variant="outline">Cancel</Button>
          </Link>
         
            <Button onClick={submit}>
              Submit
            </Button>
          
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
