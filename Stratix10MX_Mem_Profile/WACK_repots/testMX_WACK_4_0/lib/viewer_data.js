var pipelineJSON='{"1579353792":{"nodes":[{"name":"bit.shuffle", "id":1580295712, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"bit.shuffle", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Entry", "id":1581373264, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Exit", "id":1581414272, "start":"14", "end":"45", "details":[{"type":"table", "Exit Start Cycle":"14", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1584072576, "start":"11", "end":"14", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"11", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ROM Lookup", "id":1590238416, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"0", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1590239584, "start":"3", "end":"14", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"3", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1590240256, "start":"0", "end":"14", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"14"}], "type":"inst"}], "links":[{"from":1581373264, "to":1580295712, "details":[{"type":"table", "Width":"128"}]}, {"from":1584072576, "to":1581414272, "details":[{"type":"table", "Width":"64"}]}, {"from":1590238416, "to":1584072576, "details":[{"type":"table", "Width":"32"}]}, {"from":1590238416, "to":1590239584, "details":[{"type":"table", "Width":"32"}]}, {"from":1590239584, "to":1581414272, "details":[{"type":"table", "Width":"32"}]}, {"from":1590240256, "to":1584072576, "details":[{"type":"table", "Width":"64"}]}]}, "1579588800":{"nodes":[{"name":"Exit", "id":1582398080, "start":"7.8e+02", "end":"8.1e+02", "details":[{"type":"table", "Exit Start Cycle":"782", "Exit Latency":"31", "Exit FIFO Depth":"1024", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"<<", "id":1582595312, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"And", "id":1582596480, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit And", "Constant Operand":"2044 (0x7FC)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":1582596816, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Entry", "id":1582838336, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1584044272, "start":"7.8e+02", "end":"7.8e+02", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"779", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"Ptrtoint", "id":1584046848, "start":"3", "end":"3", "details":[{"type":"table", "Instruction":"64-bit Ptrtoint", "Start Cycle":"3", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Inttoptr", "id":1584047184, "start":"7.7e+02", "end":"7.7e+02", "details":[{"type":"table", "Instruction":"Inttoptr", "Start Cycle":"768", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":">>", "id":1584114368, "start":"3", "end":"3", "details":[{"type":"table", "Instruction":"64-bit Logical Right Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"3", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"ROM Lookup", "id":1584115536, "start":"7.7e+02", "end":"7.7e+02", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"768", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1584116704, "start":"7.7e+02", "end":"7.8e+02", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"771", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1584117376, "start":"0", "end":"7.8e+02", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"782"}], "type":"inst"}], "links":[{"from":1582595312, "to":1582596480, "details":[{"type":"table", "Width":"64"}]}, {"from":1582596480, "to":1582596816, "details":[{"type":"table", "Width":"64"}]}, {"from":1582596816, "to":1584046848, "details":[{"type":"table", "Width":"64"}]}, {"from":1582838336, "to":1582595312, "details":[{"type":"table", "Width":"128"}]}, {"from":1584044272, "to":1582398080, "details":[{"type":"table", "Width":"64"}]}, {"from":1584046848, "to":1584114368, "details":[{"type":"table", "Width":"64"}]}, {"from":1584047184, "to":1584115536, "details":[{"type":"table", "Width":"64"}]}, {"from":1584114368, "to":1584047184, "details":[{"type":"table", "Width":"64"}]}, {"from":1584115536, "to":1584044272, "details":[{"type":"table", "Width":"32"}]}, {"from":1584115536, "to":1584116704, "details":[{"type":"table", "Width":"32"}]}, {"from":1584116704, "to":1582398080, "details":[{"type":"table", "Width":"32"}]}, {"from":1584117376, "to":1584044272, "details":[{"type":"table", "Width":"64"}]}]}, "1579809168":{"nodes":[{"name":"Entry", "id":1584052640, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"45", "Latency":"0"}], "type":"inst"}, {"name":"ROM Lookup", "id":1584053312, "start":"45", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"45", "Latency":"213"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1584054480, "start":"2.6e+02", "end":"2.7e+02", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"259", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1584055152, "start":"0", "end":"2.7e+02", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"270"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1584057984, "start":"2.7e+02", "end":"2.7e+02", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"267", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"Exit", "id":1590243440, "start":"2.7e+02", "end":"3e+02", "details":[{"type":"table", "Exit Start Cycle":"270", "Exit Latency":"31", "Exit FIFO Depth":"512", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}], "links":[{"from":1584052640, "to":1584053312, "details":[{"type":"table", "Width":"128"}]}, {"from":1584053312, "to":1584054480, "details":[{"type":"table", "Width":"32"}]}, {"from":1584053312, "to":1584057984, "details":[{"type":"table", "Width":"32"}]}, {"from":1584054480, "to":1590243440, "details":[{"type":"table", "Width":"32"}]}, {"from":1584055152, "to":1584057984, "details":[{"type":"table", "Width":"64"}]}, {"from":1584057984, "to":1590243440, "details":[{"type":"table", "Width":"64"}]}]}, "1579955024":{"nodes":[{"name":"Exit", "id":1582474624, "start":"5.3e+02", "end":"5.6e+02", "details":[{"type":"table", "Exit Start Cycle":"526", "Exit Latency":"31", "Exit FIFO Depth":"1024", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":1590153488, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"45", "Latency":"0"}], "type":"inst"}, {"name":"ROM Lookup", "id":1590154160, "start":"45", "end":"5.1e+02", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"45", "Latency":"469"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1590155328, "start":"5.2e+02", "end":"5.3e+02", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"515", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1590155664, "start":"0", "end":"5.3e+02", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"526"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1590158496, "start":"5.2e+02", "end":"5.3e+02", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"523", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}], "links":[{"from":1590153488, "to":1590154160, "details":[{"type":"table", "Width":"128"}]}, {"from":1590154160, "to":1590155328, "details":[{"type":"table", "Width":"32"}]}, {"from":1590154160, "to":1590158496, "details":[{"type":"table", "Width":"32"}]}, {"from":1590155328, "to":1582474624, "details":[{"type":"table", "Width":"32"}]}, {"from":1590155664, "to":1590158496, "details":[{"type":"table", "Width":"64"}]}, {"from":1590158496, "to":1582474624, "details":[{"type":"table", "Width":"64"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_random_access", "id":1576541160, "type":"kernel", "children":[{"name":"test_random_access.B0", "id":1576708464, "type":"bb", "children":[{"name":"Cluster 0", "id":1579353792, "type":"cluster"}, {"name":"Cluster 1", "id":1579588800, "type":"cluster"}, {"name":"Cluster 3", "id":1579955024, "type":"cluster"}, {"name":"Cluster 2", "id":1579809168, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[{"name":"test_random_access", "id":1576541160, "type":"kernel", "children":[{"name":"Local Memory", "id":1, "type":"memtype", "children":[{"name":"Unknown ROM (address space 6)", "id":2, "details":[{"type":"table", "Requested size":"8192 bytes", "Implemented size":"8192 bytes", "Number of banks":"1", "Number of replicates":"4", "Additional information":"ROM contents for 4 replicates were  pruned based on access pattern of the load site"}], "type":"romsys", "children":[{"name":"Bank 0", "id":3, "details":[{"type":"table", "Bank width":"32 bits", "Implemented size":"8192 bytes", "Number of replicates":"4", "Replicate ID(s) with pruned initializer":"0, 1, 2 and 3"}], "type":"bank", "children":[{"name":"Replicate 0", "id":4, "details":[{"type":"table", "Width":"32 bits", "Depth":"512 words", "Size":"2048 bytes", "Additional Information":"75 % of ROM contents were pruned away based on the access pattern of the load site."}], "type":"replicate", "children":[{"name":"R", "id":5, "type":"port"}]}, {"name":"Replicate 1", "id":6, "details":[{"type":"table", "Width":"32 bits", "Depth":"512 words", "Size":"2048 bytes", "Additional Information":"75 % of ROM contents were pruned away based on the access pattern of the load site."}], "type":"replicate", "children":[{"name":"R", "id":7, "type":"port"}]}, {"name":"Replicate 2", "id":8, "details":[{"type":"table", "Width":"32 bits", "Depth":"512 words", "Size":"2048 bytes", "Additional Information":"75 % of ROM contents were pruned away based on the access pattern of the load site."}], "type":"replicate", "children":[{"name":"R", "id":9, "type":"port"}]}, {"name":"Replicate 3", "id":10, "details":[{"type":"table", "Width":"32 bits", "Depth":"512 words", "Size":"2048 bytes", "Additional Information":"75 % of ROM contents were pruned away based on the access pattern of the load site."}], "type":"replicate", "children":[{"name":"R", "id":11, "type":"port"}]}]}]}, {"name":"rand", "id":12, "details":[{"type":"table", "Declared at":[{"type":"text", "text":"%L", "links":[{"filename":"test_WACK.cl", "line":"37"}]}]}], "debug":[[{"filename":"test_WACK.cl", "line":37}]], "type":"unsynth"}]}, {"name":"Load", "id":1576789928, "details":[{"type":"table", "Data width":"32 bits", "Type":"ROM lookup", "Loads from":"Unknown ROM (address space 6)"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Load", "id":1576793256, "details":[{"type":"table", "Data width":"32 bits", "Type":"ROM lookup", "Loads from":"Unknown ROM (address space 6)"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Load", "id":1576799800, "details":[{"type":"table", "Data width":"32 bits", "Type":"ROM lookup", "Loads from":"Unknown ROM (address space 6)"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Load", "id":1576801880, "details":[{"type":"table", "Data width":"32 bits", "Type":"ROM lookup", "Loads from":"Unknown ROM (address space 6)"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}]}], "links":[{"from":1576789928, "to":5}, {"from":1576793256, "to":7}, {"from":1576799800, "to":9}, {"from":1576801880, "to":11}]}';
var systemJSON='{}';
var blockJSON='{"1576708464":{"nodes":[{"name":"Cluster 0", "id":1579353792, "start":"0", "end":"45", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_random_accesss_c1_enter_test_random_access1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"45"}], "type":"bb", "children":[{"name":"Logic", "id":1579360800, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"14"}], "type":"inst"}, {"name":"Exit", "id":1579563168, "details":[{"type":"table", "Exit Start Cycle":"14", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 1", "id":1579588800, "start":"0", "end":"8.1e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_random_accesss_c0_enter_test_random_access4", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"813"}], "type":"bb", "children":[{"name":"Logic", "id":1579595600, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"782"}], "type":"inst"}, {"name":"Exit", "id":1579786288, "details":[{"type":"table", "Exit Start Cycle":"782", "Exit Latency":"31", "Exit FIFO Depth":"1024", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 3", "id":1579955024, "start":"45", "end":"5.6e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c3_in_entry_test_random_accesss_c3_enter_test_random_access10", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"45", "Cluster Latency":"512"}], "type":"bb", "children":[{"name":"Logic", "id":1579961824, "details":[{"type":"table", "Cluster Logic Start Cycle":"45", "Cluster Logic Latency":"481"}], "type":"inst"}, {"name":"Exit", "id":1580069248, "details":[{"type":"table", "Exit Start Cycle":"526", "Exit Latency":"31", "Exit FIFO Depth":"1024", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 2", "id":1579809168, "start":"45", "end":"3e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_random_accesss_c2_enter_test_random_access7", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"45", "Cluster Latency":"256"}], "type":"bb", "children":[{"name":"Logic", "id":1579815984, "details":[{"type":"table", "Cluster Logic Start Cycle":"45", "Cluster Logic Latency":"225"}], "type":"inst"}, {"name":"Exit", "id":1579931760, "details":[{"type":"table", "Exit Start Cycle":"270", "Exit Latency":"31", "Exit FIFO Depth":"512", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"ST", "id":1581337888, "start":"45", "end":"3e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"45", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ST", "id":1582419280, "start":"3e+02", "end":"5.6e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"301", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ST", "id":1583270528, "start":"8.1e+02", "end":"8.8e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"813", "Latency":"64"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ST", "id":1583989600, "start":"5.6e+02", "end":"8.1e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"557", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}], "links":[{"from":1579360800, "to":1579563168}, {"from":1579595600, "to":1579786288}, {"from":1579961824, "to":1580069248}, {"from":1579815984, "to":1579931760}, {"from":1581337888, "to":1582419280, "details":[{"type":"table", "Width":"1"}]}, {"from":1579563168, "to":1581337888, "details":[{"type":"table", "Width":"256"}]}, {"from":1582419280, "to":1583989600, "details":[{"type":"table", "Width":"1"}]}, {"from":1579931760, "to":1582419280, "details":[{"type":"table", "Width":"128"}]}, {"from":1579786288, "to":1583270528, "details":[{"type":"table", "Width":"128"}]}, {"from":1583989600, "to":1583270528, "details":[{"type":"table", "Width":"1"}]}, {"from":1580069248, "to":1583989600, "details":[{"type":"table", "Width":"128"}]}]}}';
var scheduleJSON='{"1576541160":{"nodes":[{"name":"test_random_access.B0", "id":1576708464, "start":"0", "end":"877", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 1", "id":1579588800, "start":"0", "end":"813", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_random_accesss_c0_enter_test_random_access4", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"813"}], "type":"cluster", "children":[{"name":"<<", "id":1582595312, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"And", "id":1582596480, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit And", "Constant Operand":"2044 (0x7FC)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":1582596816, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptrtoint", "id":1584046848, "start":"3", "end":"3", "details":[{"type":"table", "Instruction":"64-bit Ptrtoint", "Start Cycle":"3", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":">>", "id":1584114368, "start":"3", "end":"3", "details":[{"type":"table", "Instruction":"64-bit Logical Right Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"3", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Inttoptr", "id":1584047184, "start":"768", "end":"768", "details":[{"type":"table", "Instruction":"Inttoptr", "Start Cycle":"768", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"ROM Lookup", "id":1584115536, "start":"768", "end":"770", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"768", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1584116704, "start":"771", "end":"782", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"771", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1584117376, "start":"0", "end":"782", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"782"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1584044272, "start":"779", "end":"782", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"779", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"Exit", "id":1582398080, "start":"782", "end":"813", "details":[{"type":"table", "Exit Start Cycle":"782", "Exit Latency":"31", "Exit FIFO Depth":"1024", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"Cluster 0", "id":1579353792, "start":"0", "end":"45", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_random_accesss_c1_enter_test_random_access1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"45"}], "type":"cluster", "children":[{"name":"bit.shuffle", "id":1580295712, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"bit.shuffle", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"ROM Lookup", "id":1590238416, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"0", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1590239584, "start":"3", "end":"14", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"3", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1590240256, "start":"0", "end":"14", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"14"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1584072576, "start":"11", "end":"14", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"11", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"Exit", "id":1581414272, "start":"14", "end":"45", "details":[{"type":"table", "Exit Start Cycle":"14", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"Cluster 2", "id":1579809168, "start":"45", "end":"301", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_random_accesss_c2_enter_test_random_access7", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"45", "Cluster Latency":"256"}], "type":"cluster", "children":[{"name":"ROM Lookup", "id":1584053312, "start":"45", "end":"258", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"45", "Latency":"213"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1584054480, "start":"259", "end":"270", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"259", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1584055152, "start":"0", "end":"270", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"270"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1584057984, "start":"267", "end":"270", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"267", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"Exit", "id":1590243440, "start":"270", "end":"301", "details":[{"type":"table", "Exit Start Cycle":"270", "Exit Latency":"31", "Exit FIFO Depth":"512", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"Cluster 3", "id":1579955024, "start":"45", "end":"557", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c3_in_entry_test_random_accesss_c3_enter_test_random_access10", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"45", "Cluster Latency":"512"}], "type":"cluster", "children":[{"name":"ROM Lookup", "id":1590154160, "start":"45", "end":"514", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"45", "Latency":"469"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Convert", "id":1590155328, "start":"515", "end":"526", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"515", "Latency":"11"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"z", "id":1590155664, "start":"0", "end":"526", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"526"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":1590158496, "start":"523", "end":"526", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"523", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"Exit", "id":1582474624, "start":"526", "end":"557", "details":[{"type":"table", "Exit Start Cycle":"526", "Exit Latency":"31", "Exit FIFO Depth":"1024", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":1581337888, "start":"45", "end":"301", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"45", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ST", "id":1582419280, "start":"301", "end":"557", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"301", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ST", "id":1583989600, "start":"557", "end":"813", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"557", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}, {"name":"ST", "id":1583270528, "start":"813", "end":"877", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"813", "Latency":"64"}], "debug":[[{"filename":"test_WACK.cl", "line":45}]], "type":"inst"}]}], "links":[]}}';