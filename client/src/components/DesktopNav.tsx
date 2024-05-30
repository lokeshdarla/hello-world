import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { IoMdChatboxes } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { Button } from '@/components/ui/button';
import { IoMdSettings } from "react-icons/io";

const DesktopNav = () => {
  return (
    <Card className='hidden lg:h-screen lg:flex lg:items-center lg:justify-between lg:py-4 lg:px-2 lg:w-16 lg:flex-col'>
      <nav>
        <ul className='flex flex-col gap-4'>
          <li>
            <Tooltip>
              <TooltipTrigger ><Button
                size="icon"
              >
                <IoMdChatboxes size={20} />
              </Button> </TooltipTrigger>
              <TooltipContent>
                Conversations
              </TooltipContent>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size='icon'
                  variant={'outline'}>
                  <HiUsers size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Friends
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </nav>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <IoMdSettings size={25} />
      </div>
    </Card>
  )
}

export default DesktopNav;
