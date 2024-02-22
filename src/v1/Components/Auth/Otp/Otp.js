export const Otp = ({setOtp, registerHandler, Otp})=>{
    return (
        <div>
            <div className="otp-wrapper">
                <div>
                    <input type="number" name="signup-input" className="otp" onChange={(e)=>setOtp(e.target.value)}/>
                </div>
                <div className="register-button">
                    <button onClick={registerHandler} >Verify OTP</button>
                </div>

            </div>
        </div>
    )
}