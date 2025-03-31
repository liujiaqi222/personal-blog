import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";


const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-2xl md:text-3xl">About Me</h1>
        </div>
      </div>
      <hr className="my-8"/>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className='h-48 w-48'>
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback >JiaQi</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Web Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, dolore odio qui tempore necessitatibus eius mollitia enim natus dolor nisi possimus voluptatibus, aspernatur ratione praesentium! Nihil pariatur praesentium nisi voluptatum?
        </p>
      </div>
    </div>
  )
}

export default AboutPage;