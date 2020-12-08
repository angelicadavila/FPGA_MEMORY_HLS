var pipelineJSON='{"938907952":{"nodes":[{"name":"Ptr. Comp.", "id":940362432, "start":"8", "end":"11", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"8", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Entry", "id":940525264, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Or", "id":940755728, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"<<", "id":940766800, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"z", "id":943635472, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"11"}], "type":"inst"}, {"name":"Convert", "id":944024848, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Exit", "id":944025392, "start":"11", "end":"42", "details":[{"type":"table", "Exit Start Cycle":"11", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Convert", "id":944305360, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}], "links":[{"from":940362432, "to":944025392, "details":[{"type":"table", "Width":"64"}]}, {"from":940525264, "to":940766800, "details":[{"type":"table", "Width":"128"}]}, {"from":940755728, "to":944305360, "details":[{"type":"table", "Width":"32"}]}, {"from":940766800, "to":940362432, "details":[{"type":"table", "Width":"32"}]}, {"from":940766800, "to":940755728, "details":[{"type":"table", "Width":"32"}]}, {"from":940766800, "to":944024848, "details":[{"type":"table", "Width":"32"}]}, {"from":943635472, "to":940362432, "details":[{"type":"table", "Width":"64"}]}, {"from":944024848, "to":944025392, "details":[{"type":"table", "Width":"32"}]}, {"from":944305360, "to":944025392, "details":[{"type":"table", "Width":"32"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_multiplereads", "id":937748792, "type":"kernel", "children":[{"name":"test_multiplereads.B0", "id":937960960, "type":"bb", "children":[{"name":"Cluster 0", "id":938907952, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[], "links":[]}';
var systemJSON='{}';
var blockJSON='{"937960960":{"nodes":[{"name":"Cluster 0", "id":938907952, "start":"0", "end":"42", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"42"}], "type":"bb", "children":[{"name":"Logic", "id":938915088, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"11"}], "type":"inst"}, {"name":"Exit", "id":940347584, "details":[{"type":"table", "Exit Start Cycle":"11", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"ST", "id":944179136, "start":"42", "end":"1.1e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"64 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"42", "Latency":"64"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}], "links":[{"from":938915088, "to":940347584}, {"from":940347584, "to":944179136, "details":[{"type":"table", "Width":"192"}]}]}}';
var scheduleJSON='{"937748792":{"nodes":[{"name":"test_multiplereads.B0", "id":937960960, "start":"0", "end":"106", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":938907952, "start":"0", "end":"42", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"42"}], "type":"cluster", "children":[{"name":"<<", "id":940766800, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":944024848, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":940755728, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":944305360, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"z", "id":943635472, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"11"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":940362432, "start":"8", "end":"11", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"8", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Exit", "id":944025392, "start":"11", "end":"42", "details":[{"type":"table", "Exit Start Cycle":"11", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":944179136, "start":"42", "end":"106", "details":[{"type":"table", "Instruction":"Store", "Width":"64 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"42", "Latency":"64"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}]}], "links":[]}}';
