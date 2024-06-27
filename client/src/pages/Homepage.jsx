import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import React from "react";
const Homepage = () => {

 return<div className="flex tailwind.config.jsplace-items-center">
  <Card className="mx-auto" w-72>
     <CardHeader>
       <CardTitle>Card Title</CardTitle>
       <CardDescription>Card Description</CardDescription>
     </CardHeader>
     <CardContent>
       <p>Card Content</p>
     </CardContent>
     <CardFooter>
       <p>Card Footer</p>
     </CardFooter>
   </Card>
</div>
 
};

export default Homepage;
