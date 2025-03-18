import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] justify-center items-center">
      <div className="">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>লগইন করুন</CardTitle>
            <CardDescription>আপনার অ্যাকাউন্টে প্রবেশ করুন</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="emailPhone">ইমেইল বা ফোন নম্বর</Label>
                  <Input id="emailPhone" placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">পাসওয়ার্ড</Label>
                  <Input id="password" type="password" placeholder="আপনার পাসওয়ার্ড লিখুন" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/"}><Button variant="outline" className="text-red-700">বাতিল</Button></Link>
            <Button type="submit" className="bg-green-700 hover:bg-green-500">লগইন</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
