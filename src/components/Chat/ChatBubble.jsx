
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {PostChatMessage} from "@/API/PostAPIs.jsx";

export default function ChatBubble() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: "welcome", role: "assistant", text: "Hello! How can I help you?" },
    ]);
    const [isSending, setIsSending] = useState(false);
    const [sendError, setSendError] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [messages, isOpen]);

    const sendMessage = async (e) => {
        e.preventDefault();
        const text = input.trim();
        if (!text || isSending) return;

        setIsSending(true);
        setSendError("");

        try {
            const message = { id: crypto.randomUUID(), role: "user", text };
            await PostChatMessage(text);
            setMessages((prev) => [...prev, message]);
            setInput("");
        } catch {
            setSendError("Could not send the message. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

            {/* Chat window */}
            {isOpen && (
                <Card className="flex h-[min(500px,calc(100dvh-7rem))] w-[calc(100vw-3rem)] flex-col overflow-hidden bg-white shadow-xl sm:w-[380px]">

                    <CardHeader className="flex flex-row items-center justify-between border-b">
                        <CardTitle>Chat Assistant</CardTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            <X className="size-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="min-h-0 flex-1 overflow-y-auto space-y-3">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${
                                    msg.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm break-words ${
                                        msg.role === "user"
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-foreground"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </CardContent>

                    <CardFooter className="flex-col items-stretch gap-2 border-t">
                        {sendError && (
                            <p role="alert" className="text-red-700">{sendError}</p>
                        )}
                        <form
                            onSubmit={sendMessage}
                            className="flex w-full gap-2"
                        >
                            <Input
                                value={input}
                                readOnly={isSending}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                aria-label="Message"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isSending || !input.trim()}
                                aria-label="Send message"
                            >
                                <Send className="size-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            {/* Floating bubble */}
            <Button
                size="icon"
                className="size-14 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                aria-expanded={isOpen}
            >
                {isOpen ? (
                    <X className="size-6" />
                ) : (
                    <MessageCircle className="size-6" />
                )}
            </Button>
        </div>
    );
}
