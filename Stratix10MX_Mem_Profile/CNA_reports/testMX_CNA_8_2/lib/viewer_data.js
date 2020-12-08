var pipelineJSON='{"3181482384":{"nodes":[{"name":"Entry", "id":3182671728, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"x", "id":3183431984, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"+", "id":3184197504, "start":"0", "end":"1", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Start Cycle":"0", "Latency":"1"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"<<", "id":3184290016, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"4 (0x4)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":3184351680, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"<<", "id":3184353248, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"3 (0x3)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":3184354816, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":57}]], "type":"inst"}, {"name":"y", "id":3184588752, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Exit", "id":3184857296, "start":"4", "end":"35", "details":[{"type":"table", "Exit Start Cycle":"4", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"z", "id":3184858800, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3184922704, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":61}]], "type":"inst"}], "links":[{"from":3182671728, "to":3184290016, "details":[{"type":"table", "Width":"128"}]}, {"from":3182671728, "to":3184353248, "details":[{"type":"table", "Width":"128"}]}, {"from":3183431984, "to":3184354816, "details":[{"type":"table", "Width":"64"}]}, {"from":3184197504, "to":3184351680, "details":[{"type":"table", "Width":"32"}]}, {"from":3184197504, "to":3184354816, "details":[{"type":"table", "Width":"32"}]}, {"from":3184197504, "to":3184922704, "details":[{"type":"table", "Width":"32"}]}, {"from":3184290016, "to":3184197504, "details":[{"type":"table", "Width":"32"}]}, {"from":3184351680, "to":3184857296, "details":[{"type":"table", "Width":"64"}]}, {"from":3184353248, "to":3184197504, "details":[{"type":"table", "Width":"32"}]}, {"from":3184354816, "to":3184857296, "details":[{"type":"table", "Width":"64"}]}, {"from":3184588752, "to":3184922704, "details":[{"type":"table", "Width":"64"}]}, {"from":3184858800, "to":3184351680, "details":[{"type":"table", "Width":"64"}]}, {"from":3184922704, "to":3184857296, "details":[{"type":"table", "Width":"64"}]}]}, "3181935440":{"nodes":[{"name":"Exit", "id":3184996944, "start":"35", "end":"66", "details":[{"type":"table", "Exit Start Cycle":"35", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":3186917392, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"35", "Latency":"0"}], "type":"inst"}], "links":[]}, "3181971456":{"nodes":[{"name":"Hard FP +", "id":3182114720, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3182115056, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3182115392, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Entry", "id":3183875312, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"317", "Latency":"0"}], "type":"inst"}, {"name":"Hard FP +", "id":3184203456, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184203792, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184204128, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184204464, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184204800, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184205136, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184205472, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184205808, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184206144, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184206480, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184206816, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184207152, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184231952, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184232288, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184232624, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184232960, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Exit", "id":3184392320, "start":"3.2e+02", "end":"3.5e+02", "details":[{"type":"table", "Exit Start Cycle":"322", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"1032", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Hard FP +", "id":3185007008, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185007344, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185007680, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185008016, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3186571952, "start":"3.2e+02", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}], "links":[{"from":3182114720, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3182115056, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3182115392, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3183875312, "to":3182114720, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3182115056, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3182115392, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184203456, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184203792, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184204128, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184204464, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184204800, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184205136, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184205472, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184205808, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184206144, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184206480, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184206816, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184207152, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184231952, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184232288, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184232624, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3184232960, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3185007008, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3185007344, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3185007680, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3185008016, "details":[{"type":"table", "Width":"2056"}]}, {"from":3183875312, "to":3186571952, "details":[{"type":"table", "Width":"2056"}]}, {"from":3184203456, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184203792, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184204128, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184204464, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184204800, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184205136, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184205472, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184205808, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184206144, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184206480, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184206816, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184207152, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184231952, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184232288, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184232624, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3184232960, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3185007008, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3185007344, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3185007680, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3185008016, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}, {"from":3186571952, "to":3184392320, "details":[{"type":"table", "Width":"32"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_multiplereads", "id":3178584680, "type":"kernel", "children":[{"name":"test_multiplereads.B0", "id":3178782016, "type":"bb", "children":[{"name":"Cluster 0", "id":3181482384, "type":"cluster"}, {"name":"Cluster 2", "id":3181971456, "type":"cluster"}, {"name":"Cluster 1", "id":3181935440, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[], "links":[]}';
var systemJSON='{}';
var blockJSON='{"3178782016":{"nodes":[{"name":"Cluster 0", "id":3181482384, "start":"0", "end":"35", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"35"}], "type":"bb", "children":[{"name":"Logic", "id":3181489392, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"4"}], "type":"inst"}, {"name":"Exit", "id":3181596432, "details":[{"type":"table", "Exit Start Cycle":"4", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 2", "id":3181971456, "start":"3.2e+02", "end":"3.5e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_multiplereadss_c2_enter_test_multiplereads9", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"317", "Cluster Latency":"36"}], "type":"bb", "children":[{"name":"Logic", "id":3181977760, "details":[{"type":"table", "Cluster Logic Start Cycle":"317", "Cluster Logic Latency":"5"}], "type":"inst"}, {"name":"Exit", "id":3182056896, "details":[{"type":"table", "Exit Start Cycle":"322", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"1032", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 1", "id":3181935440, "start":"35", "end":"66", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_multiplereadss_c1_enter_test_multiplereads6", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"35", "Cluster Latency":"31"}], "type":"bb", "children":[{"name":"Logic", "id":3181941520, "details":[{"type":"table", "Cluster Logic Start Cycle":"35", "Cluster Logic Latency":"0"}], "type":"inst"}, {"name":"Exit", "id":3181949760, "details":[{"type":"table", "Exit Start Cycle":"35", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"LD", "id":3184196000, "start":"35", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"1024 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"282"}], "debug":[[{"filename":"test_CNA.cl", "line":57}]], "type":"inst"}, {"name":"LD", "id":3184860304, "start":"35", "end":"3.2e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"1024 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"282"}], "debug":[[{"filename":"test_CNA.cl", "line":61}]], "type":"inst"}, {"name":"ST", "id":3184919568, "start":"3.5e+02", "end":"3.6e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"1024 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"353", "Latency":"2"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}], "links":[{"from":3181489392, "to":3181596432}, {"from":3181977760, "to":3182056896}, {"from":3181941520, "to":3181949760}, {"from":3184196000, "to":3181977760, "details":[{"type":"table", "Width":"1024"}]}, {"from":3181596432, "to":3184196000, "details":[{"type":"table", "Width":"256"}]}, {"from":3184860304, "to":3181977760, "details":[{"type":"table", "Width":"1024"}]}, {"from":3181596432, "to":3184860304, "details":[{"type":"table", "Width":"256"}]}, {"from":3182056896, "to":3184919568, "details":[{"type":"table", "Width":"1032"}]}, {"from":3181949760, "to":3184919568, "details":[{"type":"table", "Width":"128"}]}]}}';
var scheduleJSON='{"3178584680":{"nodes":[{"name":"test_multiplereads.B0", "id":3178782016, "start":"0", "end":"355", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":3181482384, "start":"0", "end":"35", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"35"}], "type":"cluster", "children":[{"name":"<<", "id":3184353248, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"3 (0x3)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"<<", "id":3184290016, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"4 (0x4)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"+", "id":3184197504, "start":"0", "end":"1", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Start Cycle":"0", "Latency":"1"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"x", "id":3183431984, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3184354816, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":57}]], "type":"inst"}, {"name":"y", "id":3184588752, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3184922704, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":61}]], "type":"inst"}, {"name":"z", "id":3184858800, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3184351680, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Exit", "id":3184857296, "start":"4", "end":"35", "details":[{"type":"table", "Exit Start Cycle":"4", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"Cluster 1", "id":3181935440, "start":"35", "end":"66", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_multiplereadss_c1_enter_test_multiplereads6", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"35", "Cluster Latency":"31"}], "type":"cluster", "children":[{"name":"Exit", "id":3184996944, "start":"35", "end":"66", "details":[{"type":"table", "Exit Start Cycle":"35", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":3184860304, "start":"35", "end":"317", "details":[{"type":"table", "Instruction":"Load", "Width":"1024 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"282"}], "debug":[[{"filename":"test_CNA.cl", "line":61}]], "type":"inst"}, {"name":"LD", "id":3184196000, "start":"35", "end":"317", "details":[{"type":"table", "Instruction":"Load", "Width":"1024 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"282"}], "debug":[[{"filename":"test_CNA.cl", "line":57}]], "type":"inst"}, {"name":"Cluster 2", "id":3181971456, "start":"317", "end":"353", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_multiplereadss_c2_enter_test_multiplereads9", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"317", "Cluster Latency":"36"}], "type":"cluster", "children":[{"name":"Hard FP +", "id":3186571952, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185008016, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185007680, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185007344, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3185007008, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3184232960, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184232624, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184232288, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184231952, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184207152, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184206816, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184206480, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184206144, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":67}]], "type":"inst"}, {"name":"Hard FP +", "id":3184205808, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184205472, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184205136, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184204800, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184204464, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184204128, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184203792, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3184203456, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":66}]], "type":"inst"}, {"name":"Hard FP +", "id":3182115392, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3182115056, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Hard FP +", "id":3182114720, "start":"317", "end":"322", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"317", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}, {"name":"Exit", "id":3184392320, "start":"322", "end":"353", "details":[{"type":"table", "Exit Start Cycle":"322", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"1032", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":3184919568, "start":"353", "end":"355", "details":[{"type":"table", "Instruction":"Store", "Width":"1024 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"353", "Latency":"2"}], "debug":[[{"filename":"test_CNA.cl", "line":65}]], "type":"inst"}]}], "links":[]}}';
