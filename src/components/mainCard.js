import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "./icons";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function CardWithForm({ card, btnText, type, functionToBeExecuted }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [title, setTitle] = React.useState(card?.title);

  const truncateString = (str, num) => {
    return str.length > num ? str.slice(0, num) + "..." : str;
  };

  React.useEffect(() => {
    const t = truncateString(card?.title, 16);
    setTitle(t);
  }, [card?.title]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card className="pt-6 ">
      <CardContent>
        <div key={card?.id}>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg transition transform"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute inset-0 bg-opacity-50 transition-opacity ${isHovered ? "opacity-0" : "opacity-100"
                }`}
            ></div>
            <img
              className={`object-cover aspect-square transition-transform duration-300 cursor-pointer ${isHovered ? "scale-110" : ""
                }`}
              src={card?.imageUrl}
              alt={card?.title}
              width={500} // Example width
              height={300} // Example height
              layout="responsive" // Maintain aspect ratio
            />
          </div>
          <CardTitle className="mt-4">
            <div className="w-full flex justify-between items-center">
              <p>
                {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
              </p>
              {type != "internship" && (
                <div>
                  {card.github && <Link
                    href={card.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <Icons.gitHub className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>}

                  {card.twitter && <Link
                    href={card.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={buttonVariants({
                        size: "icon",
                        variant: "ghost",
                      })}
                    >
                      <Icons.twitter className="h-5 w-5 fill-current" />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </Link>}
                </div>
              )}
            </div>
          </CardTitle>
          {type != "internship" ? (
            <CardDescription variant="outline">
              - {card?.managedBy}
            </CardDescription>
          ) : (
            <CardDescription
              variant="outline"
              className={`text-${card.status.includes("pending") ? "green" : "red"
                }-500 font-bold`}
            >
              {card.status}
            </CardDescription>
          )}
          <CardDescription className="text-gray-500 text-sm mt-2 line-clamp-2">
            {truncateString(card?.description, 130)}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {type != "internship" && (
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={card?.members} />
          </div>
        )}
        {type != "internship" ? (
          type === "events" ? (
            <div className="flex items-center gap-2">
              <Link href={`/${type}/${card.id}`}>
                <p className="text-xs text-muted-foreground hover:underline cursor-pointer">
                  View more
                </p>
              </Link>

              <Button
                onClick={() => {
                  console.log(functionToBeExecuted)
                  if (functionToBeExecuted) {
                    console.log('first')
                    functionToBeExecuted(card.id);
                  }
                }}
              >
                {btnText}
              </Button>
            </div>
          ) : (
            <Link href={`/${type}/${card.id}`}>
              <Button
                onClick={() => {
                  if (functionToBeExecuted) functionToBeExecuted(id);
                }}
              >
                {btnText}
              </Button>
            </Link>
          )
        ) : (
          card.url && <Link
            href={card.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="hover:text-blue-500 hover:cursor-pointer hover:italic">
              {card.url}
            </div>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
