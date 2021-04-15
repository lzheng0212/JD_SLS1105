import './DonationGrid.css';

function DonationGrid() {
    return (
        <div className = 'Body'>
            <div className = "Header1">
                <p>
                    Your donation will provide...
                </p>
            </div>
           
            <div className = 'Button'>
                <element className = 'ButtonAmount'>
                    <p>
                        $50 means that...
                    </p>
                </element>
            </div>
            <div className = 'Button1'>
                <element className = 'ButtonAmount'>
                    <p>
                        $150 means that...
                    </p>
                </element>
               
            </div>
            <div className = 'Button2'>
                <element className = 'ButtonAmount'>
                    <p>
                        $250 means that...
                    </p>
                </element>
                
            </div>
            <div className = 'Button3'>
                <element className = 'ButtonAmount'>
                    <p>
                        $500 means that...
                    </p>
                </element>
                
            </div>
            <div className = 'Button4'>
                <element className = 'ButtonAmount'>
                    <p>
                        $1000 means that...
                    </p>
                </element>
            </div>

            <div className = 'Select'>
                <p>
                    Select a Amount
                </p>
            </div>
            <div className = 'payButton'>
                <element className = 'payAmount'>
                    <p>
                        $50
                    </p>
                </element>
            </div>
            <div className = 'payButton1'>
                <element className = 'payAmount'>
                    <p>
                        $150
                    </p>
                </element>
            </div>
            <div className = 'payButton2'>
                <element className = 'payAmount'>
                    <p>
                        $250
                    </p>
                </element>
            </div>
            <div className = 'payButton3'>
                <element className = 'payAmount'>
                    <p>
                        $500
                    </p>
                </element>
            </div>
            <div className = 'payButton4'>
                <element className = 'payAmount'>
                    <p>
                        $1000
                    </p>
                </element>
            </div>

            <div className = 'externalPay'>
                <element className = 'payText'>
                    <p>
                        Third-party Payment Link
                    </p>
                </element>
            </div>
        </div>
);
}

export default DonationGrid;