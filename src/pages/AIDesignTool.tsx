import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AIDesignTool = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I understand you want to create a fashion design. I can help you connect with suppliers like Printful and AliExpress, select fabrics, and design your products. What type of clothing item would you like to start with?",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-bold">Back to Home</span>
        </Link>
        <div className="text-xl font-black">LAUNDRI AI DESIGNER</div>
        <div className="w-24" /> {/* Spacer for centering */}
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
              How can I help you today?
            </h1>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-2xl px-6 py-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl shadow-lg">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="min-h-[120px] border-0 resize-none bg-transparent px-6 py-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="flex items-center justify-between px-4 pb-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Smile className="h-5 w-5" />
              </Button>
              <Button
                onClick={handleSend}
                disabled={!message.trim() || isLoading}
                size="icon"
                className="rounded-full"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            AI-powered fashion design assistant • Connect with Printful & AliExpress
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIDesignTool;
