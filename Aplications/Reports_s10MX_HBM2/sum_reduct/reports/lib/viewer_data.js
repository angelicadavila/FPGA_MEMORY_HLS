var pipelineJSON='{"290592672":{"nodes":[{"name":"Exit", "id":291291712, "start":"5", "end":"9", "details":[{"type":"table", "Exit Start Cycle":"5", "Exit Latency":"4", "Exit FIFO Depth":"16", "Exit FIFO Width":"8", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":299714784, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"1", "Latency":"0"}], "type":"inst"}, {"name":"arg", "id":299748624, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"Input Synchronization for \'arg\'", "Start Cycle":"0", "Latency":"2"}], "type":"inst"}, {"name":"Compare", "id":299750592, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"32-bit Integer Compare", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"arg", "id":299750928, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"Input Synchronization for \'arg\'", "Start Cycle":"0", "Latency":"2"}], "type":"inst"}, {"name":"Compare", "id":299753136, "start":"2", "end":"3", "details":[{"type":"table", "Instruction":"32-bit Integer Compare", "Start Cycle":"2", "Latency":"1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"arg", "id":299753472, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Input Synchronization for \'arg\'", "Start Cycle":"0", "Latency":"3"}], "type":"inst"}, {"name":"Select", "id":299755680, "start":"3", "end":"4", "details":[{"type":"table", "Instruction":"32-bit Select", "Start Cycle":"3", "Latency":"1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"+", "id":299756016, "start":"4", "end":"4", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Constant Operand":"-1 (0xFFFFFFFF)", "Start Cycle":"4", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"+", "id":299756688, "start":"5", "end":"5", "details":[{"type":"table", "Instruction":"33-bit Integer Add", "Constant Operand":"-1 (0x1FFFFFFFF)", "Start Cycle":"5", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"FFwd Src", "id":299757024, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"FFwd Source", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"FFwd Src", "id":299759648, "start":"5", "end":"5", "details":[{"type":"table", "Instruction":"FFwd Source", "Start Cycle":"5", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}], "links":[{"from":299748624, "to":299750592, "details":[{"type":"table", "Width":"32"}]}, {"from":299750592, "to":299757024, "details":[{"type":"table", "Width":"1"}]}, {"from":299750928, "to":299753136, "details":[{"type":"table", "Width":"32"}]}, {"from":299753136, "to":299755680, "details":[{"type":"table", "Width":"1"}]}, {"from":299753472, "to":299755680, "details":[{"type":"table", "Width":"32"}]}, {"from":299755680, "to":299756016, "details":[{"type":"table", "Width":"32"}]}, {"from":299756016, "to":299756688, "details":[{"type":"table", "Width":"32"}]}, {"from":299756688, "to":299759648, "details":[{"type":"table", "Width":"33"}]}]}, "290785616":{"nodes":[{"name":"Exit", "id":292481888, "start":"6", "end":"10", "details":[{"type":"table", "Exit Start Cycle":"6", "Exit Latency":"4", "Exit FIFO Depth":"16", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":292927120, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"1", "Latency":"0"}], "type":"inst"}, {"name":"FFwd Dest", "id":300174144, "start":"1", "end":"1", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"Select", "id":300179616, "start":"1", "end":"1", "details":[{"type":"table", "Instruction":"33-bit Select", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"\'j\'", "id":300179952, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"Feedback Read", "Variable":"\'j\'", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"<<", "id":300182384, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"5 (0x5)", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"x", "id":300183888, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":300186720, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"FFwd Dest", "id":300189040, "start":"6", "end":"6", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"6", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"+", "id":300191664, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Constant Operand":"1 (0x1)", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"Feedback", "id":300192336, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"Feedback Write", "Variable":"\'j\'", "Feedback FIFO Depth":"1", "Feedback FIFO Width":"32", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"Loop Orch", "id":300194976, "start":"6", "end":"6", "details":[{"type":"table", "Instruction":"Loop Orchestration Logic"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}], "links":[{"from":292927120, "to":292481888, "details":[{"type":"table", "Width":"16"}]}, {"from":292927120, "to":300179616, "details":[{"type":"table", "Width":"16"}]}, {"from":292927120, "to":300179952, "details":[{"type":"table", "Width":"16"}]}, {"from":300174144, "to":300179616, "details":[{"type":"table", "Width":"33"}]}, {"from":300179616, "to":292481888, "details":[{"type":"table", "Width":"33"}]}, {"from":300179616, "to":300179616, "details":[{"type":"table", "Width":"33"}]}, {"from":300179616, "to":300192336, "details":[{"type":"table", "Width":"33"}]}, {"from":300179616, "to":300194976, "details":[{"type":"table", "Width":"33"}]}, {"from":300179952, "to":300182384, "details":[{"type":"table", "Width":"32"}]}, {"from":300179952, "to":300191664, "details":[{"type":"table", "Width":"32"}]}, {"from":300182384, "to":300186720, "details":[{"type":"table", "Width":"32"}]}, {"from":300183888, "to":300186720, "details":[{"type":"table", "Width":"64"}]}, {"from":300186720, "to":292481888, "details":[{"type":"table", "Width":"64"}]}, {"from":300189040, "to":292481888, "details":[{"type":"table", "Width":"1"}]}, {"from":300191664, "to":300192336, "details":[{"type":"table", "Width":"32"}]}, {"from":300192336, "to":300179952, "reverse":1, "details":[{"type":"table", "Width":"32"}]}, {"from":300194976, "to":292481888, "details":[{"type":"table", "Width":"1"}]}]}, "291270496":{"nodes":[{"name":"Exit", "id":299654736, "start":"3.1e+02", "end":"3.2e+02", "details":[{"type":"table", "Exit Start Cycle":"312", "Exit Latency":"4", "Exit FIFO Depth":"32", "Exit FIFO Width":"8", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":300211328, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"292", "Latency":"0"}], "type":"inst"}, {"name":"Hard Dot-15", "id":300222976, "start":"2.9e+02", "end":"3.1e+02", "details":[{"type":"table", "Instruction":"Hardened Dot Product of Size 15", "Start Cycle":"292", "Latency":"16"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Hard FP Accum.", "id":300223856, "start":"3.1e+02", "end":"3.1e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-Point Accumulator", "Start Cycle":"308", "Latency":"4"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"FFwd Src", "id":300226480, "start":"3.1e+02", "end":"3.1e+02", "details":[{"type":"table", "Instruction":"FFwd Source", "Start Cycle":"312", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}], "links":[{"from":300211328, "to":300222976, "details":[{"type":"table", "Width":"1048"}]}, {"from":300211328, "to":300223856, "details":[{"type":"table", "Width":"1048"}]}, {"from":300222976, "to":300223856, "details":[{"type":"table", "Width":"32"}]}, {"from":300223856, "to":300226480, "details":[{"type":"table", "Width":"32"}]}]}, "291531424":{"nodes":[{"name":"Entry", "id":291383952, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"FFwd Dest", "id":299486432, "start":"1", "end":"1", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"FFwd Dest", "id":299489056, "start":"1", "end":"1", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Select", "id":299491472, "start":"1", "end":"1", "details":[{"type":"table", "Instruction":"32-bit Select", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"z", "id":299492144, "start":"0", "end":"1", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"1"}], "type":"inst"}, {"name":"Exit", "id":299743104, "start":"1", "end":"5", "details":[{"type":"table", "Exit Start Cycle":"1", "Exit Latency":"4", "Exit FIFO Depth":"8", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}], "links":[{"from":299486432, "to":299491472, "details":[{"type":"table", "Width":"1"}]}, {"from":299489056, "to":299491472, "details":[{"type":"table", "Width":"32"}]}, {"from":299491472, "to":299743104, "details":[{"type":"table", "Width":"32"}]}, {"from":299492144, "to":299743104, "details":[{"type":"table", "Width":"64"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_multiplereads", "id":287679288, "type":"kernel", "children":[{"name":"test_multiplereads.B0", "id":287709424, "type":"bb", "children":[{"name":"Cluster 0", "id":290592672, "type":"cluster"}]}, {"name":"test_multiplereads.B2", "id":287677808, "type":"bb", "children":[{"name":"Cluster 3", "id":291531424, "type":"cluster"}]}, {"name":"test_multiplereads.B1", "id":287677728, "type":"bb", "children":[{"name":"Cluster 2", "id":291270496, "type":"cluster"}, {"name":"Cluster 1", "id":290785616, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[], "links":[]}';
var systemJSON='{}';
var blockJSON='{"287677728":{"nodes":[{"name":"Cluster 2", "id":291270496, "start":"2.9e+02", "end":"3.2e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_for_cond2_preheader_test_multiplereadss_c1_enter_test_multiplereads5", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"292", "Cluster Latency":"24"}], "type":"bb", "children":[{"name":"Logic", "id":291276096, "details":[{"type":"table", "Cluster Logic Start Cycle":"292", "Cluster Logic Latency":"20"}], "type":"inst"}, {"name":"Exit", "id":291490384, "details":[{"type":"table", "Exit Start Cycle":"312", "Exit Latency":"4", "Exit FIFO Depth":"32", "Exit FIFO Width":"8", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 1", "id":290785616, "start":"1", "end":"10", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_for_cond2_preheader_test_multiplereadss_c0_enter351_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"1", "Cluster Latency":"9"}], "type":"bb", "children":[{"name":"Logic", "id":290792192, "details":[{"type":"table", "Cluster Logic Start Cycle":"1", "Cluster Logic Latency":"5"}], "type":"inst"}, {"name":"Exit", "id":291027856, "details":[{"type":"table", "Exit Start Cycle":"6", "Exit Latency":"4", "Exit FIFO Depth":"16", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"LD", "id":292193888, "start":"10", "end":"2.9e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"1024 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"10", "Latency":"282"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Loop Orch", "id":299629104, "details":[{"type":"table", "Instruction":"Loop Orchestration Logic"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}], "links":[{"from":291276096, "to":291490384}, {"from":290792192, "to":291027856}, {"from":292193888, "to":291276096, "details":[{"type":"table", "Width":"1024"}]}, {"from":291027856, "to":292193888, "details":[{"type":"table", "Width":"192"}]}, {"from":299629104, "to":290792192, "details":[{"type":"table", "Width":"1"}]}]}, "287677808":{"nodes":[{"name":"Cluster 3", "id":291531424, "start":"0", "end":"5", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_for_cond_cleanup_loopexit_test_multiplereadss_c0_enter37_test_multiplereads0", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"5"}], "type":"bb", "children":[{"name":"Logic", "id":291538128, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"1"}], "type":"inst"}, {"name":"Exit", "id":291588112, "details":[{"type":"table", "Exit Start Cycle":"1", "Exit Latency":"4", "Exit FIFO Depth":"8", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"ST", "id":292020608, "start":"5", "end":"6", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"5", "Latency":"1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":50}]], "type":"inst"}], "links":[{"from":291538128, "to":291588112}, {"from":291588112, "to":292020608, "details":[{"type":"table", "Width":"128"}]}]}, "287709424":{"nodes":[{"name":"Cluster 0", "id":290592672, "start":"1", "end":"9", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"1", "Cluster Latency":"8"}], "type":"bb", "children":[{"name":"Logic", "id":290599600, "details":[{"type":"table", "Cluster Logic Start Cycle":"1", "Cluster Logic Latency":"4"}], "type":"inst"}, {"name":"Exit", "id":290678608, "details":[{"type":"table", "Exit Start Cycle":"5", "Exit Latency":"4", "Exit FIFO Depth":"16", "Exit FIFO Width":"8", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}], "links":[{"from":290599600, "to":290678608}]}}';
var scheduleJSON='{"287679288":{"nodes":[{"name":"test_multiplereads.B0", "id":287709424, "start":"0", "end":"9", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":290592672, "start":"1", "end":"9", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"1", "Cluster Latency":"8"}], "type":"cluster", "children":[{"name":"arg", "id":299748624, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"Input Synchronization for \'arg\'", "Start Cycle":"0", "Latency":"2"}], "type":"inst"}, {"name":"Compare", "id":299750592, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"32-bit Integer Compare", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"FFwd Src", "id":299757024, "start":"2", "end":"2", "details":[{"type":"table", "Instruction":"FFwd Source", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"arg", "id":299750928, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"Input Synchronization for \'arg\'", "Start Cycle":"0", "Latency":"2"}], "type":"inst"}, {"name":"Compare", "id":299753136, "start":"2", "end":"3", "details":[{"type":"table", "Instruction":"32-bit Integer Compare", "Start Cycle":"2", "Latency":"1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"arg", "id":299753472, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Input Synchronization for \'arg\'", "Start Cycle":"0", "Latency":"3"}], "type":"inst"}, {"name":"Select", "id":299755680, "start":"3", "end":"4", "details":[{"type":"table", "Instruction":"32-bit Select", "Start Cycle":"3", "Latency":"1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"+", "id":299756016, "start":"4", "end":"4", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Constant Operand":"-1 (0xFFFFFFFF)", "Start Cycle":"4", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"+", "id":299756688, "start":"5", "end":"5", "details":[{"type":"table", "Instruction":"33-bit Integer Add", "Constant Operand":"-1 (0x1FFFFFFFF)", "Start Cycle":"5", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"FFwd Src", "id":299759648, "start":"5", "end":"5", "details":[{"type":"table", "Instruction":"FFwd Source", "Start Cycle":"5", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"Exit", "id":291291712, "start":"5", "end":"9", "details":[{"type":"table", "Exit Start Cycle":"5", "Exit Latency":"4", "Exit FIFO Depth":"16", "Exit FIFO Width":"8", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}]}, {"name":"test_multiplereads.B1", "id":287677728, "start":"9", "end":"325", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 1", "id":290785616, "start":"10", "end":"19", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_for_cond2_preheader_test_multiplereadss_c0_enter351_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"1", "Cluster Latency":"9"}], "type":"cluster", "children":[{"name":"\'j\'", "id":300179952, "start":"11", "end":"11", "details":[{"type":"table", "Instruction":"Feedback Read", "Variable":"\'j\'", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"+", "id":300191664, "start":"11", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer Add", "Constant Operand":"1 (0x1)", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"<<", "id":300182384, "start":"11", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"5 (0x5)", "Start Cycle":"2", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"FFwd Dest", "id":300174144, "start":"10", "end":"10", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"Select", "id":300179616, "start":"10", "end":"10", "details":[{"type":"table", "Instruction":"33-bit Select", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"x", "id":300183888, "start":"9", "end":"15", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":300186720, "start":"12", "end":"15", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"FFwd Dest", "id":300189040, "start":"15", "end":"15", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"6", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"Exit", "id":292481888, "start":"15", "end":"19", "details":[{"type":"table", "Exit Start Cycle":"6", "Exit Latency":"4", "Exit FIFO Depth":"16", "Exit FIFO Width":"192", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":292193888, "start":"19", "end":"301", "details":[{"type":"table", "Instruction":"Load", "Width":"1024 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"10", "Latency":"282"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Cluster 2", "id":291270496, "start":"301", "end":"325", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_for_cond2_preheader_test_multiplereadss_c1_enter_test_multiplereads5", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"292", "Cluster Latency":"24"}], "type":"cluster", "children":[{"name":"Hard Dot-15", "id":300222976, "start":"301", "end":"317", "details":[{"type":"table", "Instruction":"Hardened Dot Product of Size 15", "Start Cycle":"292", "Latency":"16"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Hard FP Accum.", "id":300223856, "start":"317", "end":"321", "details":[{"type":"table", "Instruction":"Hardened Floating-Point Accumulator", "Start Cycle":"308", "Latency":"4"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"FFwd Src", "id":300226480, "start":"321", "end":"321", "details":[{"type":"table", "Instruction":"FFwd Source", "Start Cycle":"312", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Exit", "id":299654736, "start":"321", "end":"325", "details":[{"type":"table", "Exit Start Cycle":"312", "Exit Latency":"4", "Exit FIFO Depth":"32", "Exit FIFO Width":"8", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}]}, {"name":"test_multiplereads.B2", "id":287677808, "start":"325", "end":"331", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 3", "id":291531424, "start":"325", "end":"330", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_for_cond_cleanup_loopexit_test_multiplereadss_c0_enter37_test_multiplereads0", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"5"}], "type":"cluster", "children":[{"name":"FFwd Dest", "id":299486432, "start":"326", "end":"326", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":44}]], "type":"inst"}, {"name":"FFwd Dest", "id":299489056, "start":"326", "end":"326", "details":[{"type":"table", "Instruction":"FFwd Destination", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"Select", "id":299491472, "start":"326", "end":"326", "details":[{"type":"table", "Instruction":"32-bit Select", "Start Cycle":"1", "Latency":"0"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":47}]], "type":"inst"}, {"name":"z", "id":299492144, "start":"325", "end":"326", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"1"}], "type":"inst"}, {"name":"Exit", "id":299743104, "start":"326", "end":"330", "details":[{"type":"table", "Exit Start Cycle":"1", "Exit Latency":"4", "Exit FIFO Depth":"8", "Exit FIFO Width":"128", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":292020608, "start":"330", "end":"331", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"5", "Latency":"1"}], "debug":[[{"filename":"test_bw10_delta.cl", "line":50}]], "type":"inst"}]}], "links":[]}}';
