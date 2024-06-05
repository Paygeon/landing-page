import * as React from 'react';

interface SectionProps {
    component: React.ComponentType<any>;
    title: string;
    description: string;
    listItems: string[];
}

const Section: React.FC<SectionProps> = ({ component: Component, title, description, listItems }) => {
    return (
        <section className="flex justify-between items-center p-8 bg-black">
            <div className="flex-1 pr-8">
                <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
                <p className="text-lg text-white mb-4">{description}</p>
                <ul className="list-disc pl-4">
                    {listItems.map((item, index) => (
                        <li key={index} className="text-base text-white mb-2">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <Component />
            </div>
        </section>
    );
};

export default Section;
