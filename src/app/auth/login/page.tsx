import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] justify-center items-center">
      <div className="">
        <Card className="w-[350px]">
          <CardHeader>
            {/* <CardTitle>লগইন করুন</CardTitle> */}
            <div className="flex justify-center gap-5 items-center flex-col">
              <Image src="/asset/msab_logo_b.png" width={85} height={85} alt={"msab logo"} />
              <CardTitle>আপনার অ্যাকাউন্টে প্রবেশ করুন</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="emailPhone">ইমেইল বা ফোন নম্বর</Label>
                  <Input
                    id="emailPhone"
                    placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">পাসওয়ার্ড</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"/"}>
              <Button variant="outline" className="text-red-700">
                বাতিল করুন
              </Button>
            </Link>
            <Button type="submit" className="bg-green-700 hover:bg-green-500">
              প্রবেশ করুন
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
