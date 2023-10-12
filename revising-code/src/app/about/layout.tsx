export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex gap-2 w-full">
            <div className="flex-col gap-3">
                <div className="bg-green-400">
                    <ul className="list-disc">
                        <li>This is a list element</li>
                        <li>This is a list element</li>
                        <li>This is a list element</li>
                        <li>This is a list element</li>
                    </ul>
                </div>
            </div>
            {children}
        </div>

    )
}