import Modal from "react-modal";
import tickMark from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius:"16px"
    },
};
Modal.setAppElement("#root");

export default ({
    modalIsOpen = false,
    onAfterOpen = () => { },
    closeModal = () => { },
}) => {
    const navigate = useNavigate();

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={onAfterOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="flex items-center justify-center min-h-fit bg-gray-100">                
                    <div className="bg-white p-6 rounded-lg text-center">                        
                        <div className="flex justify-center mb-4">                            
                            <div className=" p-2">                                
                                <img src={tickMark} />
                            </div>
                        </div>
                        <h2 className="text-lg font-bold mb-2">Payment Successful</h2>
                        <p className="text-gray-600 mb-4">Thanks for purchasing.</p>
                        <p className="text-gray-800 font-semibold mb-6">Total: 2449.96</p>
                        <button onClick={(()=>{
                            closeModal();
                            toast.warn("Moving to homepage!", {autoClose: 1000});
                            setTimeout(() => {
                                navigate("/");
                            }, 1000);
                        })} className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
                            <span>Close</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
