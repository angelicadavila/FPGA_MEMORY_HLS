var pipelineJSON='{"2287688816":{"nodes":[{"name":"<<", "id":2287789952, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"+", "id":2289195984, "start":"0", "end":"1", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Start Cycle":"0", "Latency":"1"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"<<", "id":2289305328, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":2289306800, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":71}]], "type":"inst"}, {"name":"y", "id":2289518640, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"x", "id":2289605488, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":2289853568, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":79}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":2292765920, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Exit", "id":2296464128, "start":"4", "end":"35", "details":[{"type":"table", "Exit Start Cycle":"4", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"320", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":2296521744, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":2296560208, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":75}]], "type":"inst"}, {"name":"y1", "id":2296561344, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y1\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"z", "id":2296614112, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}], "links":[{"from":2287789952, "to":2289195984, "details":[{"type":"table", "Width":"32"}]}, {"from":2289195984, "to":2289306800, "details":[{"type":"table", "Width":"32"}]}, {"from":2289195984, "to":2289853568, "details":[{"type":"table", "Width":"32"}]}, {"from":2289195984, "to":2292765920, "details":[{"type":"table", "Width":"32"}]}, {"from":2289195984, "to":2296560208, "details":[{"type":"table", "Width":"32"}]}, {"from":2289305328, "to":2289195984, "details":[{"type":"table", "Width":"32"}]}, {"from":2289306800, "to":2296464128, "details":[{"type":"table", "Width":"64"}]}, {"from":2289518640, "to":2296560208, "details":[{"type":"table", "Width":"64"}]}, {"from":2289605488, "to":2289306800, "details":[{"type":"table", "Width":"64"}]}, {"from":2289853568, "to":2296464128, "details":[{"type":"table", "Width":"64"}]}, {"from":2292765920, "to":2296464128, "details":[{"type":"table", "Width":"64"}]}, {"from":2296521744, "to":2287789952, "details":[{"type":"table", "Width":"128"}]}, {"from":2296521744, "to":2289305328, "details":[{"type":"table", "Width":"128"}]}, {"from":2296560208, "to":2296464128, "details":[{"type":"table", "Width":"64"}]}, {"from":2296561344, "to":2289853568, "details":[{"type":"table", "Width":"64"}]}, {"from":2296614112, "to":2292765920, "details":[{"type":"table", "Width":"64"}]}]}, "2288091104":{"nodes":[{"name":"Exit", "id":2296488624, "start":"35", "end":"66", "details":[{"type":"table", "Exit Start Cycle":"35", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":2296540368, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"35", "Latency":"0"}], "type":"inst"}], "links":[]}, "2288126816":{"nodes":[{"name":"Hard FP +", "id":2292952448, "start":"2.4e+02", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292952784, "start":"2.4e+02", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292953120, "start":"2.4e+02", "end":"2.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292953456, "start":"2.4e+02", "end":"2.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292953792, "start":"2.4e+02", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292954128, "start":"2.4e+02", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292954464, "start":"2.4e+02", "end":"2.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292954800, "start":"2.4e+02", "end":"2.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Exit", "id":2296460016, "start":"2.5e+02", "end":"2.8e+02", "details":[{"type":"table", "Exit Start Cycle":"248", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"264", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Hard FP +", "id":2296535344, "start":"2.4e+02", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Hard FP +", "id":2296535680, "start":"2.4e+02", "end":"2.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Hard FP +", "id":2296536016, "start":"2.4e+02", "end":"2.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Entry", "id":2296790992, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"237", "Latency":"0"}], "type":"inst"}, {"name":"Hard FP +", "id":2297410032, "start":"2.4e+02", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}], "links":[{"from":2292952448, "to":2292953120, "details":[{"type":"table", "Width":"32"}]}, {"from":2292952784, "to":2292953456, "details":[{"type":"table", "Width":"32"}]}, {"from":2292953120, "to":2296460016, "details":[{"type":"table", "Width":"32"}]}, {"from":2292953456, "to":2296460016, "details":[{"type":"table", "Width":"32"}]}, {"from":2292953792, "to":2292954464, "details":[{"type":"table", "Width":"32"}]}, {"from":2292954128, "to":2292954800, "details":[{"type":"table", "Width":"32"}]}, {"from":2292954464, "to":2296460016, "details":[{"type":"table", "Width":"32"}]}, {"from":2292954800, "to":2296460016, "details":[{"type":"table", "Width":"32"}]}, {"from":2296535344, "to":2296536016, "details":[{"type":"table", "Width":"32"}]}, {"from":2296535680, "to":2296460016, "details":[{"type":"table", "Width":"32"}]}, {"from":2296536016, "to":2296460016, "details":[{"type":"table", "Width":"32"}]}, {"from":2296790992, "to":2292952448, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292952784, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292953120, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292953456, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292953792, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292954128, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292954464, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2292954800, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2296535344, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2296535680, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2296536016, "details":[{"type":"table", "Width":"776"}]}, {"from":2296790992, "to":2297410032, "details":[{"type":"table", "Width":"776"}]}, {"from":2297410032, "to":2296535680, "details":[{"type":"table", "Width":"32"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_multiplereads", "id":2284853528, "type":"kernel", "children":[{"name":"test_multiplereads.B0", "id":2285029744, "type":"bb", "children":[{"name":"Cluster 0", "id":2287688816, "type":"cluster"}, {"name":"Cluster 2", "id":2288126816, "type":"cluster"}, {"name":"Cluster 1", "id":2288091104, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[], "links":[]}';
var systemJSON='{}';
var blockJSON='{"2285029744":{"nodes":[{"name":"Cluster 0", "id":2287688816, "start":"0", "end":"35", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"35"}], "type":"bb", "children":[{"name":"Logic", "id":2287695696, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"4"}], "type":"inst"}, {"name":"Exit", "id":2287827600, "details":[{"type":"table", "Exit Start Cycle":"4", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"320", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 2", "id":2288126816, "start":"2.4e+02", "end":"2.8e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_multiplereadss_c2_enter_test_multiplereads10", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"237", "Cluster Latency":"42"}], "type":"bb", "children":[{"name":"Logic", "id":2288133264, "details":[{"type":"table", "Cluster Logic Start Cycle":"237", "Cluster Logic Latency":"11"}], "type":"inst"}, {"name":"Exit", "id":2288170800, "details":[{"type":"table", "Exit Start Cycle":"248", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"264", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 1", "id":2288091104, "start":"35", "end":"66", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_multiplereadss_c1_enter_test_multiplereads7", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"35", "Cluster Latency":"31"}], "type":"bb", "children":[{"name":"Logic", "id":2288097008, "details":[{"type":"table", "Cluster Logic Start Cycle":"35", "Cluster Logic Latency":"0"}], "type":"inst"}, {"name":"Exit", "id":2288104768, "details":[{"type":"table", "Exit Start Cycle":"35", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"LD", "id":2296462208, "start":"35", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"202"}], "debug":[[{"filename":"test_CNA.cl", "line":71}]], "type":"inst"}, {"name":"LD", "id":2296483856, "start":"35", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"202"}], "debug":[[{"filename":"test_CNA.cl", "line":75}]], "type":"inst"}, {"name":"ST", "id":2296489232, "start":"2.8e+02", "end":"2.8e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"279", "Latency":"2"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"LD", "id":2296774704, "start":"35", "end":"2.4e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"202"}], "debug":[[{"filename":"test_CNA.cl", "line":79}]], "type":"inst"}], "links":[{"from":2287695696, "to":2287827600}, {"from":2288133264, "to":2288170800}, {"from":2288097008, "to":2288104768}, {"from":2296462208, "to":2288133264, "details":[{"type":"table", "Width":"256"}]}, {"from":2287827600, "to":2296462208, "details":[{"type":"table", "Width":"320"}]}, {"from":2296483856, "to":2288133264, "details":[{"type":"table", "Width":"256"}]}, {"from":2287827600, "to":2296483856, "details":[{"type":"table", "Width":"320"}]}, {"from":2288170800, "to":2296489232, "details":[{"type":"table", "Width":"264"}]}, {"from":2288104768, "to":2296489232, "details":[{"type":"table", "Width":"128"}]}, {"from":2296774704, "to":2288133264, "details":[{"type":"table", "Width":"256"}]}, {"from":2287827600, "to":2296774704, "details":[{"type":"table", "Width":"320"}]}]}}';
var scheduleJSON='{"2284853528":{"nodes":[{"name":"test_multiplereads.B0", "id":2285029744, "start":"0", "end":"281", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":2287688816, "start":"0", "end":"35", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"35"}], "type":"cluster", "children":[{"name":"<<", "id":2289305328, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"<<", "id":2287789952, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"+", "id":2289195984, "start":"0", "end":"1", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Start Cycle":"0", "Latency":"1"}], "debug":[[{"filename":"test_CNA.cl", "line":35}]], "type":"inst"}, {"name":"y", "id":2289518640, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":2296560208, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":75}]], "type":"inst"}, {"name":"x", "id":2289605488, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":2289306800, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":71}]], "type":"inst"}, {"name":"y1", "id":2296561344, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y1\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":2289853568, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":79}]], "type":"inst"}, {"name":"z", "id":2296614112, "start":"0", "end":"4", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"4"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":2292765920, "start":"1", "end":"4", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"1", "Latency":"3"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Exit", "id":2296464128, "start":"4", "end":"35", "details":[{"type":"table", "Exit Start Cycle":"4", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"320", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":2296774704, "start":"35", "end":"237", "details":[{"type":"table", "Instruction":"Load", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"202"}], "debug":[[{"filename":"test_CNA.cl", "line":79}]], "type":"inst"}, {"name":"Cluster 1", "id":2288091104, "start":"35", "end":"66", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_multiplereadss_c1_enter_test_multiplereads7", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"35", "Cluster Latency":"31"}], "type":"cluster", "children":[{"name":"Exit", "id":2296488624, "start":"35", "end":"66", "details":[{"type":"table", "Exit Start Cycle":"35", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":2296483856, "start":"35", "end":"237", "details":[{"type":"table", "Instruction":"Load", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"202"}], "debug":[[{"filename":"test_CNA.cl", "line":75}]], "type":"inst"}, {"name":"LD", "id":2296462208, "start":"35", "end":"237", "details":[{"type":"table", "Instruction":"Load", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"35", "Latency":"202"}], "debug":[[{"filename":"test_CNA.cl", "line":71}]], "type":"inst"}, {"name":"Cluster 2", "id":2288126816, "start":"237", "end":"279", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_multiplereadss_c2_enter_test_multiplereads10", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"237", "Cluster Latency":"42"}], "type":"cluster", "children":[{"name":"Hard FP +", "id":2297410032, "start":"237", "end":"242", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Hard FP +", "id":2296535680, "start":"243", "end":"248", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Hard FP +", "id":2296535344, "start":"237", "end":"242", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Hard FP +", "id":2296536016, "start":"243", "end":"248", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}, {"name":"Hard FP +", "id":2292954128, "start":"237", "end":"242", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292954800, "start":"243", "end":"248", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292953792, "start":"237", "end":"242", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292954464, "start":"243", "end":"248", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":85}]], "type":"inst"}, {"name":"Hard FP +", "id":2292952784, "start":"237", "end":"242", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292953456, "start":"243", "end":"248", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292952448, "start":"237", "end":"242", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"237", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Hard FP +", "id":2292953120, "start":"243", "end":"248", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"243", "Latency":"5"}], "debug":[[{"filename":"test_CNA.cl", "line":84}]], "type":"inst"}, {"name":"Exit", "id":2296460016, "start":"248", "end":"279", "details":[{"type":"table", "Exit Start Cycle":"248", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"264", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":2296489232, "start":"279", "end":"281", "details":[{"type":"table", "Instruction":"Store", "Width":"256 bits", "LSU Style":"Burst-coalesced non-aligned", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"279", "Latency":"2"}], "debug":[[{"filename":"test_CNA.cl", "line":83}]], "type":"inst"}]}], "links":[]}}';
