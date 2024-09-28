import FTIicons from "./footericon";

export default function Footer() {
    return (
        <footer
            style={{
                background: 'linear-gradient(to right, white,rgba(135, 206, 235, 1)), white,', // Gradient background
                padding: '1rem', // Adjust padding as needed
            }}
            className="w-full text-center flex justify-center" // Center the text and make the footer full width
        >
            <FTIicons />
           
        </footer>
    );
}
