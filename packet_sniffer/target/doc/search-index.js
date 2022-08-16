var searchIndex = JSON.parse('{\
"packet_sniffer":{"doc":"Multithreading library to intercept incoming and outgoing …","t":[13,13,4,0,0,11,11,11,11,11,11,5,5,5,5,0,5,5,0,0,11,11,11,3,12,11,11,11,11,11,11,11,11,11,11,12,11,11,11,3,12,11,11,11,11,12,11,11,11,11,12,12,11,11,11,12,12,12,12,12,11,11,11,11,11,4,13,13,13,13,13,13,13,13,13,13,13,13,13,13,3,13,13,13,13,13,13,4,13,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,12,11,11,11,12,12,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,5,5,5,5,5,5],"n":["Pause","Running","Status","address_port","args","borrow","borrow_mut","eq","equivalent","from","into","is_valid_network_layer","is_valid_transport_layer","main","print_device_list","report_info","retrieve_device","set_status_by_key","thread_parse_packets_functions","thread_write_report_functions","try_from","try_into","type_id","AddressPort","address","borrow","borrow_mut","eq","equivalent","fmt","from","hash","into","ne","new","port","try_from","try_into","type_id","Args","adapter","augment_args","augment_args_for_update","borrow","borrow_mut","device_list","fmt","from","from_arg_matches","from_arg_matches_mut","highest_port","interval","into","into_app","into_app_for_update","lowest_port","minimum_packets","network_layer_filter","output_file","transport_layer_filter","try_from","try_into","type_id","update_from_arg_matches","update_from_arg_matches_mut","AppProtocol","BGP","DHCP","DNS","FTP","FTPS","HTTP","HTTPS","IMAP","LDAP","LDAPS","NTP","NetBIOS","Other","POP","ReportInfo","SMTP","SNMP","SSH","TCP","TFTP","Telnet","TransProtocol","UDP","app_protocols","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","eq","eq","equivalent","equivalent","final_timestamp","fmt","fmt","fmt","from","from","from","hash","hash","initial_timestamp","into","into","into","received_bytes","received_packets","to_owned","to_owned","to_string","trans_protocols","transmitted_bytes","transmitted_packets","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","analyze_network_header","analyze_transport_header","from_port_to_application_protocol","modify_or_insert_destination_in_map","modify_or_insert_source_in_map","parse_packets_loop","get_min_packets_string","get_network_layer_string","get_ports_string","get_transport_layer_string","sleep_and_write_report_loop","write_report_file_header"],"q":["packet_sniffer","","","","","","","","","","","","","","","","","","","","","","","packet_sniffer::address_port","","","","","","","","","","","","","","","","packet_sniffer::args","","","","","","","","","","","","","","","","","","","","","","","","","","packet_sniffer::report_info","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","packet_sniffer::thread_parse_packets_functions","","","","","","packet_sniffer::thread_write_report_functions","","","","",""],"d":["The sniffing process is pause by the user and waiting to …","The sniffing process is running: the application parses …","This enum represents the sniffing process status.","Module defining the <code>AddressPort</code> struct, which represents a …","Module defining the <code>Args</code> struct used for command line …","","","","","","","Checks if the provided <code>network_layer</code> equals “ipv6” or …","Checks if the provided <code>transport_layer</code> equals “tcp” or …","Entry point of application execution.","Prints the list of available network adapters’ names and …","Module defining the <code>ReportInfo</code> struct, useful to format …","Given the name of the desired network adapter, this …","Loop waiting for command line inputs by the user. Used to …","Module containing functions executed by the thread in …","Module containing functions executed by the thread in …","","","","Struct representing a network address:port pair.","Network layer IPv4 or IPv6 address.","","","","","","","","","","Returns a new AddressPort element.","Transport layer port number (in the range 0..=65535).","","","","Struct for command line arguments, to be parsed using clap.","<code>-a, --adapter</code>","","","","","<code>-d, --device-list</code>","","","","","<code>-h, --highest-port</code>","<code>-i, --interval</code>","","","","<code>-l, --lowest-port</code>","<code>-m, --minimum-packets</code>","<code>-n, --network-layer-filter</code>","<code>-o, --output-file</code>","<code>-t, --transport-layer-filter</code>","","","","","","Enum representing the possible observed values of …","Border Gateway Protocol","Dynamic Host Configuration Protocol","Domain Name System","File Transfer Protocol","File Transfer Protocol over TLS/SSL","Hypertext Transfer Protocol","Hypertext Transfer Protocol over SSL/TLS","Internet Message Access Protocol","Lightweight Directory Access Protocol","Lightweight Directory Access Protocol over TLS/SSL","Network Time Protocol","NetBIOS","Not identified","Post Office Protocol","Struct useful to format the output report file and to keep …","Simple Mail Transfer Protocol","Simple Network Management Protocol","Secure Shell","Transmission Control Protocol","Trivial File Transfer Protocol","Telnet","Enum representing the possible observed values of …","User Datagram Protocol","Set of application layer protocols carried through the …","","","","","","","","","","","","","","","Last occurrence of information exchange featuring the …","","","","","","","","","First occurrence of information exchange featuring the …","","","","Amount of bytes relative to the associate address:port …","Amount of packets relative to the associate address:port …","","","","Set of transport layer protocols carried through the …","Amount of bytes relative to the associate address:port …","Amount of packets relative to the associate address:port …","","","","","","","","","","This function analyzes the network layer header passed as …","This function analyzes the transport layer header passed …","Given an integer in the range <code>0..=65535</code>, this function …","Function to insert the destination of a packet into the …","Function to insert the source of a packet into the shared …","The calling thread enters in a loop in which it waits for …","Given the minimum packets number, the function generates …","Given the network layer textual filter, the function …","Given the lowest and highest port numbers, the function …","Given the transport layer textual filter, the function …","The calling thread enters in a loop in which it waits for …","Writes the output report file header, which contains …"],"i":[1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,4,4,4,4,4,4,4,4,4,4,4,4,5,4,0,4,4,4,5,4,4,0,5,6,6,5,4,6,5,4,5,4,5,4,5,4,5,4,6,6,5,4,6,5,4,5,4,6,6,5,4,6,6,5,4,6,6,6,6,6,5,4,6,5,4,6,5,4,0,0,0,0,0,0,0,0,0,0,0,0],"f":[null,null,null,null,null,[[]],[[]],[[["status",4]],["bool",15]],[[],["bool",15]],[[]],[[]],[[["string",3]],["bool",15]],[[["string",3]],["bool",15]],[[]],[[]],null,[[["string",3]],["option",4,[["device",3]]]],[[["arc",3]]],null,null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,[[]],[[]],[[["addressport",3]],["bool",15]],[[],["bool",15]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[["addressport",3]],["bool",15]],[[["string",3],["u16",15]]],null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,[[["command",6]],["command",6]],[[["command",6]],["command",6]],[[]],[[]],null,[[["formatter",3]],["result",6]],[[]],[[["argmatches",3]],["result",4,[["error",3]]]],[[["argmatches",3]],["result",4,[["error",3]]]],null,null,[[]],[[],["command",6]],[[],["command",6]],null,null,null,null,null,[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[["argmatches",3]],["result",4,[["error",3]]]],[[["argmatches",3]],["result",4,[["error",3]]]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["transprotocol",4]],[[],["appprotocol",4]],[[]],[[]],[[["transprotocol",4]],["bool",15]],[[["appprotocol",4]],["bool",15]],[[],["bool",15]],[[],["bool",15]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],null,[[]],[[]],[[]],null,null,[[]],[[]],[[],["string",3]],null,null,null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[["option",4,[["ipheader",4]]],["u32",15],["string",3],["string",3],["string",3],["bool",15]]],[[["option",4,[["transportheader",4]]],["string",3],["u16",15],["u16",15],["option",4],["option",4],["hashset",3],["transprotocol",4],["bool",15]]],[[["u16",15]],["option",4,[["appprotocol",4]]]],[[["arc",3,[["mutex",3,[["hashmap",3,[["addressport",3],["reportinfo",3]]]]]]],["addressport",3],["u32",15],["transprotocol",4],["option",4,[["appprotocol",4]]],["option",4,[["appprotocol",4]]],["hashset",3,[["appprotocol",4]]]]],[[["arc",3,[["mutex",3,[["hashmap",3,[["addressport",3],["reportinfo",3]]]]]]],["addressport",3],["u32",15],["transprotocol",4],["option",4,[["appprotocol",4]]],["option",4,[["appprotocol",4]]],["hashset",3,[["appprotocol",4]]]]],[[["capture",3,[["active",4]]],["u16",15],["u16",15],["string",3],["string",3],["arc",3,[["mutex",3,[["hashmap",3,[["addressport",3],["reportinfo",3]]]]]]],["arc",3]]],[[["u32",15]],["string",3]],[[["string",3]],["string",3]],[[["u16",15],["u16",15]],["string",3]],[[["string",3]],["string",3]],[[["u16",15],["u16",15],["u64",15],["u32",15],["string",3],["string",3],["string",3],["string",3],["arc",3,[["mutex",3,[["hashmap",3,[["addressport",3],["reportinfo",3]]]]]]],["arc",3]]],[[["file",3],["string",3],["string",3],["i32",15],["u64",15],["u16",15],["u16",15],["u32",15],["string",3],["string",3]]]],"p":[[4,"Status"],[3,"AddressPort"],[3,"Args"],[4,"AppProtocol"],[4,"TransProtocol"],[3,"ReportInfo"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};