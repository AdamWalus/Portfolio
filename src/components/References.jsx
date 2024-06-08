import React from "react";

const References = () => {
    return (
    <section className="bg-white py-8">
    <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Referencje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg p-4 shadow-lg">
                <p className="text-gray-700 mb-4">"Adam jest niesamowitym programistą. Jego umiejętności i zaangażowanie przekroczyły nasze oczekiwania."</p>
                <p className="text-gray-900 font-semibold">Jan Kowalski, CEO XYZ Company</p>
            </div>
            <div className="border rounded-lg p-4 shadow-lg">
                <p className="text-gray-700 mb-4">"Praca z Adamem to czysta przyjemność. Jest nie tylko profesjonalistą, ale także świetnym komunikatorem."</p>
                <p className="text-gray-900 font-semibold">Anna Nowak, Project Manager ABC Corp</p>
            </div>
            <div className="border rounded-lg p-4 shadow-lg">
                <p className="text-gray-700 mb-4">"Praca z Adamem to czysta przyjemność. Jest nie tylko profesjonalistą, ale także świetnym komunikatorem."</p>
                <p className="text-gray-900 font-semibold">Anna Nowak, Project Manager ABC Corp</p>
            </div>
        </div>
    </div>
</section>
);

};

export default References;