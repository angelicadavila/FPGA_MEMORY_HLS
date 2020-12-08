var pipelineJSON='{"3334739088":{"nodes":[{"name":"<<", "id":3335683184, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"33 (0x21)", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3335881216, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"Exit", "id":3336132976, "start":"3", "end":"34", "details":[{"type":"table", "Exit Start Cycle":"3", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3336139632, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"z", "id":3336300016, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"3"}], "type":"inst"}, {"name":"x", "id":3339494096, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"3"}], "type":"inst"}, {"name":"Entry", "id":3339649248, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":">>", "id":3340986976, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit Arithmetic Right Shift", "Constant Operand":"32 (0x20)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}], "links":[{"from":3335683184, "to":3340986976, "details":[{"type":"table", "Width":"64"}]}, {"from":3335881216, "to":3336132976, "details":[{"type":"table", "Width":"64"}]}, {"from":3336139632, "to":3336132976, "details":[{"type":"table", "Width":"64"}]}, {"from":3336300016, "to":3336139632, "details":[{"type":"table", "Width":"64"}]}, {"from":3339494096, "to":3335881216, "details":[{"type":"table", "Width":"64"}]}, {"from":3339649248, "to":3335683184, "details":[{"type":"table", "Width":"128"}]}, {"from":3340986976, "to":3335881216, "details":[{"type":"table", "Width":"64"}]}, {"from":3340986976, "to":3336139632, "details":[{"type":"table", "Width":"64"}]}]}, "3334936000":{"nodes":[{"name":"Exit", "id":3335594144, "start":"5.5e+02", "end":"5.8e+02", "details":[{"type":"table", "Exit Start Cycle":"546", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"72", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":3336526304, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"546", "Latency":"0"}], "type":"inst"}], "links":[{"from":3336526304, "to":3335594144, "details":[{"type":"table", "Width":"72"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_multiplereads", "id":3332184456, "type":"kernel", "children":[{"name":"test_multiplereads.B0", "id":3332388192, "type":"bb", "children":[{"name":"Cluster 1", "id":3334936000, "type":"cluster"}, {"name":"Cluster 0", "id":3334739088, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[], "links":[]}';
var systemJSON='{}';
var blockJSON='{"3332388192":{"nodes":[{"name":"Cluster 1", "id":3334936000, "start":"5.5e+02", "end":"5.8e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_multiplereadss_c1_enter_test_multiplereads5", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"546", "Cluster Latency":"31"}], "type":"bb", "children":[{"name":"Logic", "id":3334942512, "details":[{"type":"table", "Cluster Logic Start Cycle":"546", "Cluster Logic Latency":"0"}], "type":"inst"}, {"name":"Exit", "id":3334948912, "details":[{"type":"table", "Exit Start Cycle":"546", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"72", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 0", "id":3334739088, "start":"0", "end":"34", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"34"}], "type":"bb", "children":[{"name":"Logic", "id":3334746240, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"3"}], "type":"inst"}, {"name":"Exit", "id":3334829424, "details":[{"type":"table", "Exit Start Cycle":"3", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"ST", "id":3336537536, "start":"5.8e+02", "end":"6.4e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"64 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"577", "Latency":"64"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"LD", "id":3340940944, "start":"34", "end":"5.5e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"64 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"34", "Latency":"512"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}], "links":[{"from":3334942512, "to":3334948912}, {"from":3334746240, "to":3334829424}, {"from":3334948912, "to":3336537536, "details":[{"type":"table", "Width":"72"}]}, {"from":3334829424, "to":3336537536, "details":[{"type":"table", "Width":"192"}]}, {"from":3340940944, "to":3334942512, "details":[{"type":"table", "Width":"64"}]}, {"from":3334829424, "to":3340940944, "details":[{"type":"table", "Width":"192"}]}]}}';
var scheduleJSON='{"3332184456":{"nodes":[{"name":"test_multiplereads.B0", "id":3332388192, "start":"0", "end":"641", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":3334739088, "start":"0", "end":"34", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"34"}], "type":"cluster", "children":[{"name":"<<", "id":3335683184, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"33 (0x21)", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":">>", "id":3340986976, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit Arithmetic Right Shift", "Constant Operand":"32 (0x20)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"z", "id":3336300016, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"3"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3336139632, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"x", "id":3339494096, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"3"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":3335881216, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"Exit", "id":3336132976, "start":"3", "end":"34", "details":[{"type":"table", "Exit Start Cycle":"3", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":3340940944, "start":"34", "end":"546", "details":[{"type":"table", "Instruction":"Load", "Width":"64 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"34", "Latency":"512"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}, {"name":"Cluster 1", "id":3334936000, "start":"546", "end":"577", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_multiplereadss_c1_enter_test_multiplereads5", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"546", "Cluster Latency":"31"}], "type":"cluster", "children":[{"name":"Exit", "id":3335594144, "start":"546", "end":"577", "details":[{"type":"table", "Exit Start Cycle":"546", "Exit Latency":"31", "Exit FIFO Depth":"32", "Exit FIFO Width":"72", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":3336537536, "start":"577", "end":"641", "details":[{"type":"table", "Instruction":"Store", "Width":"64 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"577", "Latency":"64"}], "debug":[[{"filename":"test_bw10.cl", "line":33}]], "type":"inst"}]}], "links":[]}}';
