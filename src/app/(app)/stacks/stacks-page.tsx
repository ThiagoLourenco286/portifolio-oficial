interface StackItem {
    title: string;
    description: string;
}

interface StacksBigProps {
    tag: string;
    items: StackItem[];
}

export function StacksPage({ tag, items }: StacksBigProps) {
    return (
        <div className="flex min-h-80 w-full flex-col gap-5 rounded-2xl border border-bordas bg-superficie p-5 sm:p-8 lg:p-10">
            <h3 className="font-plex text-xs font-medium text-destaques">{tag}</h3>

            {items.map((item) => (
                <div key={item.title} className="flex flex-col gap-5">
                    <hr className="border-bordas" />
                    <div>
                        <h2 className="font-brico text-xl font-bold text-texto-primario sm:text-2xl">
                            {item.title}
                        </h2>
                        <p className="font-brico text-sm font-medium text-texto-secundario">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}