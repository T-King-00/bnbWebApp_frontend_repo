
import { useState } from "react";
import { Send } from "lucide-react";

import { Message, MessageContent } from "@/components/ui/message";
import { Bubble, BubbleContent } from "@/components/ui/bubble";

import {
    MessageScrollerProvider,
    MessageScroller,
    MessageScrollerViewport,
    MessageScrollerContent,
    MessageScrollerItem,
    MessageScrollerButton,
} from "@/components/ui/message-scroller";

import {
    InputGroup,
    InputGroupInput,
    InputGroupAddon,
    InputGroupButton,
} from "@/components/ui/input-group";

export default function Chat() {
    const [messages, setMessages] = useState([
        {
            id: "1",
            role: "assistant",
            content: "Hello! How can I help you?",
        },
    ]);

    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        setMessages((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
                role: "user",
                content: input.trim(),
            },
        ]);

        setInput("");
    };

    return (
        <div className="flex h-[600px] w-full max-w-2xl flex-col rounded-xl border">

            <div className="border-b p-4 font-semibold">
                AI Chat Assistant
            </div>

            <div className="min-h-0 flex-1">
                <MessageScrollerProvider autoScroll>
                    <MessageScroller className="h-full">
                        <MessageScrollerViewport>
                            <MessageScrollerContent>
                                {messages.map((message) => {
                                    const isUser = message.role === "user";

                                    return (
                                        <MessageScrollerItem
                                            key={message.id}
                                            messageId={message.id}
                                            scrollAnchor={isUser}
                                        >
                                            <Message align={isUser ? "end" : "start"}>
                                                <MessageContent>
                                                    <Bubble
                                                        align={isUser ? "end" : "start"}
                                                        variant={isUser ? "default" : "secondary"}
                                                    >
                                                        <BubbleContent>
                                                            {message.content}
                                                        </BubbleContent>
                                                    </Bubble>
                                                </MessageContent>
                                            </Message>
                                        </MessageScrollerItem>
                                    );
                                })}
                            </MessageScrollerContent>
                        </MessageScrollerViewport>

                        <MessageScrollerButton />
                    </MessageScroller>
                </MessageScrollerProvider>
            </div>

            <form onSubmit={handleSend} className="border-t p-4">
                <InputGroup>
                    <InputGroupInput
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything..."
                        aria-label="Message"
                    />

                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            type="submit"
                            disabled={!input.trim()}
                            aria-label="Send message"
                        >
                            <Send className="size-4" />
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </form>
        </div>
    );
}
