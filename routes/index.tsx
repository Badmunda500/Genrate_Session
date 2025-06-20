import { Card } from "../components/Card.tsx";
import { At } from "../components/icons/At.tsx";
import { Key } from "../components/icons/Key.tsx";
import { Code } from "../components/icons/Code.tsx";
import { File } from "../components/icons/File.tsx";
import { Clock } from "../components/icons/Clock.tsx";
import { Radio } from "../components/icons/Radio.tsx";
import { Filter } from "../components/icons/Filter.tsx";
import { Repeat } from "../components/icons/Repeat.tsx";
import { Webhook } from "../components/icons/Webhook.tsx";
import { FileText } from "../components/icons/FileText.tsx";
import { ExternalLink } from "../components/ExternalLink.tsx";

const sections = [
  {
    tools: [
      {
        href: "/connectivity-test",
        icon: <Radio />,
        name: "Connectivity Test",
        description:
          "See if you are able to reach Telegram\u2019s data centers.",
      },
      {
        href: "/creation-date",
        icon: <Clock />,
        name: "Creation Date",
        description: "Get approximate creation date of Telegram users.",
      },
    ],
  },
  {
    tools: [
      {
        href: "/file-id-analyzer",
        icon: <File />,
        name: "File ID Analyzer",
        description: (
          <>
            Extract information from file&nbsp;IDs provided by Bot API or TDLib.
          </>
        ),
      },
      {
        href: "/inline-message-id-unpacker",
        icon: <At />,
        name: "Inline Message ID Unpacker",
        description: "Unpack inline message IDs.",
      },
      {
        href: "/update-explorer",
        icon: <Code />,
        name: "Update Explorer",
        description: "Explore a bot\u2019s update stream live.",
      },
      {
        href: "/webhook-manager",
        icon: <Webhook />,
        name: "Webhook Manager",
        description: "Manage a bot\u2019s webhook settings.",
      },
    ],
  },
  {
    tools: [
      {
        href: "/session-string-generator",
        icon: <Key />,
        name: "Session String Generator",
        description:
          "Generate a session string for your desired client library.",
      },
      {
        href: "/session-string-converter",
        icon: <Repeat />,
        name: "Session String Converter",
        description: "Convert between different known session string formats.",
      },
      {
        href: "/session-string-analyzer",
        icon: <FileText />,
        name: "Session String Analyzer",
        description: "Extract information from session strings.",
      },
    ],
  },
  {
    tools: [
      {
        href: "/filter-query-browser",
        icon: <Filter />,
        name: "Filter Query Browser",
        description: "Browse through grammY\u2019s filter queries.",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div class="flex flex-col w-full gap-10 pt-2 xl:pt-5">
        {sections.map((v) => (
          <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {v.tools.map((v) => (
              <Card
                href={v.href}
                title={v.name}
                description={v.description}
                icon={v.icon}
                disabled={"disabled" in v && v.disabled === false}
              />
            ))}
          </div>
        ))}
      </div>
      <footer class="text-xs py-10 flex gap-10 items-center justify-between flex-wrap flex-wrap-reverse border-t border-border mt-10">
        <span class="opacity-50">
          &copy; {new Date().getFullYear() > 2024 && "2024-"}
          {new Date().getFullYear()} grammyjs
        </span>
        <div class="flex gap-5 text-grammy flex-wrap">
          <a href="/disclaimer" class="hover:underline">
            Disclaimer
          </a>
          <a
            href="https://github.com/Badmunda500/Genrate_Session"
            target="_blank"
            class="hover:underline"
          >
            Source Code
          </a>
        </div>
      </footer>
    </>
  );
}
