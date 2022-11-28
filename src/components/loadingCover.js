import React, { useState } from 'react';
import './../Loading.css'
import LoadingElement from './loadingElement';
import LoadingElementStatus from './loadingElementStatus';

const messages = [
    {
        msg:"kernel_start", 
        pass:"complete"
    },
    {
        msg:"memory_unit", 
        pass:"online"
    },
    {
        msg:"initializing_log", 
        pass:"complete"
    },
    {
        msg:"loading_geographic_data", 
        pass:"complete"
    },
    {
        msg:"sys_vital_diagnostic", 
        pass:"pass"
    },
    {
        msg:"black_box_status", 
        pass:"online"
    },
    {
        msg:"int_pressure_sensor_status", 
        pass:"online"
    },
    {
        msg:"iff_activation", 
        pass:"complete"
    },
    {
        msg:"fcs_activation", 
        pass:"complete"
    },
    {
        msg:"pod_connection_state", 
        pass:"stable"
    },
    {
        msg:"host_platform_check", 
        pass:window.navigator.platform
    },
    {
        msg:"dbu_setup", 
        pass:"complete"
    },
    {
        msg:"inertia_control_sys", 
        pass:"online"
    },
    {
        msg:"environmental_sensor_activation", 
        pass:"complete"
    },
    {
        msg:"equipment_authentication", 
        pass:"complete"
    },
    {
        msg:"equipment_status_check", 
        pass:"pass"
    },
    {
        msg:"bus_conn_state", 
        pass:"active"
    },
    {
        msg:"module_check", 
        pass:"pass"
    },
    {
        msg:"yorha_connection_test", 
        pass:"pass"
    },
    {
        msg:"optical_system_check", 
        pass:"pass"
    },
    {
        msg:"audio_system_test", 
        pass:"pass"
    },
    {
        msg:"os_boot_pre_tests", 
        pass:"complete"
    },
    {
        msg:"os_launch_state", 
        pass:"active"
    },
    {
        msg:"gpu_stability_test", 
        pass:"pass"
    },
    {
        msg:"deranged_meme_test", 
        pass:"pass"
    },
    {
        msg:"socket_connection_test", 
        pass:"pass"
    },
    {
        msg:"vector_adjustment_test", 
        pass:"pass"
    },
    {
        msg:"io_system", 
        pass:"online"
    },
    {
        msg:"os_boot", 
        pass:"complete"
    },
    {
        msg:"vibe_check", 
        pass:"pass"
    },
    {
        msg:"rng_system_check", 
        pass:Math.random()*20000
    },
    {
        msg:"system_time_state", 
        pass:new Date().toLocaleTimeString().toLocaleLowerCase()
    },
    {
        msg:"system_date_state", 
        pass:new Date().toLocaleDateString().toLocaleLowerCase()
    },
    {
        msg:"env_operation_diagnostics", 
        pass:"pass"
    },
    {
        msg:"hid_system_init", 
        pass:"complete"
    },
    {
        msg:"network_sys", 
        pass:"online"
    },
    {
        msg:"server_connection", 
        pass:"online"
    },
    {
        msg:"internal_status_diagnostic", 
        pass:"pass"
    },
    {
        msg:"backwards_overflow_metrics", 
        pass:"synergized"
    },
    {
        msg:"dmail_subsystem", 
        pass:"online"
    },
    {
        msg:"phone_wave_link", 
        pass:"established"
    },
    {
        msg:"el_psy_congroo", 
        pass:"pass"
    },
    {
        msg:"nerve_link_diagnostic", 
        pass:"pass"
    },
    {
        msg:"ftl_drive_spooling", 
        pass:"complete"
    },
    {
        msg:"web_render_test", 
        pass:"pass"
    },
    {
        msg:"tlm_calibration_check", 
        pass:"pass"
    },
    {
        msg:"key_validation_system", 
        pass:"online"
    },
    {
        msg:"authentication_state_validation", 
        pass:"active"
    },
    {
        msg:"rfid_comm_startup", 
        pass:"complete"
    },
    {
        msg:"418_validation", 
        pass:"pass"
    },
    {
        msg:"encabulation_spinup", 
        pass:"complete"
    },
    {
        msg:"additional_tests", 
        pass:"pass"
    },
    {
        msg:"your monitor is bigger than mine", 
        pass:"it's true"
    },
]

let uniqueLoadingElementId = 0;

const LoadingCover = (props) => {
    const [id] = useState(uniqueLoadingElementId++)

    return (<div className="loading-cover">
        <div className="loading-text-vanish">
        <span className="entry-anim loading-title">system_initialization:<LoadingElementStatus text="complete" timeOut={10000} /></span>
        {messages.map(function(message, index){
                    return <LoadingElement id={id} statusText={message.pass} index={index} text={message.msg} />;
                  })}
        </div>
    </div>);
}

export default LoadingCover;