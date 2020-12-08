var pipelineJSON='{"4006464304":{"nodes":[{"name":"Exit", "id":4007044880, "start":"6", "end":"37", "details":[{"type":"table", "Exit Start Cycle":"6", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Inttoptr", "id":4007224384, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"Inttoptr", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"<<", "id":4007790160, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4008068672, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"x", "id":4008979696, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"z", "id":4009907088, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"And", "id":4009908064, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit And", "Constant Operand":"4092 (0xFFC)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4010514816, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4010538032, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"ROM Lookup", "id":4011186464, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"0", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Entry", "id":4016322624, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"y", "id":4018272992, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}], "links":[{"from":4007224384, "to":4011186464, "details":[{"type":"table", "Width":"64"}]}, {"from":4007790160, "to":4009908064, "details":[{"type":"table", "Width":"64"}]}, {"from":4008068672, "to":4007044880, "details":[{"type":"table", "Width":"64"}]}, {"from":4008979696, "to":4008068672, "details":[{"type":"table", "Width":"64"}]}, {"from":4009907088, "to":4010514816, "details":[{"type":"table", "Width":"64"}]}, {"from":4009908064, "to":4007224384, "details":[{"type":"table", "Width":"64"}]}, {"from":4010514816, "to":4007044880, "details":[{"type":"table", "Width":"64"}]}, {"from":4010538032, "to":4007044880, "details":[{"type":"table", "Width":"64"}]}, {"from":4011186464, "to":4008068672, "details":[{"type":"table", "Width":"32"}]}, {"from":4011186464, "to":4010514816, "details":[{"type":"table", "Width":"32"}]}, {"from":4011186464, "to":4010538032, "details":[{"type":"table", "Width":"32"}]}, {"from":4016322624, "to":4007790160, "details":[{"type":"table", "Width":"128"}]}, {"from":4018272992, "to":4010538032, "details":[{"type":"table", "Width":"64"}]}]}, "4006851520":{"nodes":[{"name":"Exit", "id":4007048736, "start":"2.6e+02", "end":"2.9e+02", "details":[{"type":"table", "Exit Start Cycle":"262", "Exit Latency":"31", "Exit FIFO Depth":"512", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Entry", "id":4007542960, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"<<", "id":4007543632, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4009927184, "start":"2.6e+02", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"259", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"y", "id":4009972112, "start":"0", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"262"}], "type":"inst"}, {"name":"Ptrtoint", "id":4009975504, "start":"3", "end":"3", "details":[{"type":"table", "Instruction":"64-bit Ptrtoint", "Start Cycle":"3", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4010033840, "start":"2.6e+02", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"259", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Inttoptr", "id":4010159312, "start":"2.6e+02", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Inttoptr", "Start Cycle":"256", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"ROM Lookup", "id":4010473792, "start":"2.6e+02", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"256", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"z", "id":4010539648, "start":"0", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"262"}], "type":"inst"}, {"name":">>", "id":4011017680, "start":"3", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"64-bit Logical Right Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"3", "Latency":"253"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"x", "id":4012368656, "start":"0", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"262"}], "type":"inst"}, {"name":"And", "id":4015081008, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"64-bit And", "Constant Operand":"2046 (0x7FE)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4015081344, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4018701552, "start":"2.6e+02", "end":"2.6e+02", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"259", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}], "links":[{"from":4007542960, "to":4007543632, "details":[{"type":"table", "Width":"128"}]}, {"from":4007543632, "to":4015081008, "details":[{"type":"table", "Width":"64"}]}, {"from":4009927184, "to":4007048736, "details":[{"type":"table", "Width":"64"}]}, {"from":4009972112, "to":4018701552, "details":[{"type":"table", "Width":"64"}]}, {"from":4009975504, "to":4011017680, "details":[{"type":"table", "Width":"64"}]}, {"from":4010033840, "to":4007048736, "details":[{"type":"table", "Width":"64"}]}, {"from":4010159312, "to":4010473792, "details":[{"type":"table", "Width":"64"}]}, {"from":4010473792, "to":4009927184, "details":[{"type":"table", "Width":"32"}]}, {"from":4010473792, "to":4010033840, "details":[{"type":"table", "Width":"32"}]}, {"from":4010473792, "to":4018701552, "details":[{"type":"table", "Width":"32"}]}, {"from":4010539648, "to":4010033840, "details":[{"type":"table", "Width":"64"}]}, {"from":4011017680, "to":4010159312, "details":[{"type":"table", "Width":"64"}]}, {"from":4012368656, "to":4009927184, "details":[{"type":"table", "Width":"64"}]}, {"from":4015081008, "to":4015081344, "details":[{"type":"table", "Width":"64"}]}, {"from":4015081344, "to":4009975504, "details":[{"type":"table", "Width":"64"}]}, {"from":4018701552, "to":4007048736, "details":[{"type":"table", "Width":"64"}]}]}, "4007343184":{"nodes":[{"name":"Exit", "id":4008992256, "start":"5.5e+02", "end":"5.8e+02", "details":[{"type":"table", "Exit Start Cycle":"554", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"64", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Hard FP +", "id":4010855824, "start":"5.5e+02", "end":"5.5e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"549", "Latency":"5"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Entry", "id":4018706592, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"549", "Latency":"0"}], "type":"inst"}], "links":[{"from":4010855824, "to":4008992256, "details":[{"type":"table", "Width":"32"}]}, {"from":4018706592, "to":4010855824, "details":[{"type":"table", "Width":"96"}]}]}, "4007378096":{"nodes":[{"name":"Entry", "id":4010654976, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"805", "Latency":"0"}], "type":"inst"}, {"name":"Hard FP +", "id":4012839920, "start":"8e+02", "end":"8.1e+02", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"805", "Latency":"5"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Exit", "id":4018272000, "start":"8.1e+02", "end":"8.4e+02", "details":[{"type":"table", "Exit Start Cycle":"810", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"64", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}], "links":[{"from":4010654976, "to":4012839920, "details":[{"type":"table", "Width":"96"}]}, {"from":4012839920, "to":4018272000, "details":[{"type":"table", "Width":"32"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_random_access", "id":4003631432, "type":"kernel", "children":[{"name":"test_random_access.B0", "id":4003798176, "type":"bb", "children":[{"name":"Cluster 1", "id":4006851520, "type":"cluster"}, {"name":"Cluster 2", "id":4007343184, "type":"cluster"}, {"name":"Cluster 0", "id":4006464304, "type":"cluster"}, {"name":"Cluster 3", "id":4007378096, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[{"name":"test_random_access", "id":4003631432, "type":"kernel", "children":[{"name":"Local Memory", "id":1, "type":"memtype", "children":[{"name":"Unknown ROM (address space 6)", "id":2, "details":[{"type":"table", "Requested size":"8192 bytes", "Implemented size":"8192 bytes", "Number of banks":"1", "Number of replicates":"2", "Additional information":"ROM contents for 2 replicates were  pruned based on access pattern of the load site"}], "type":"romsys", "children":[{"name":"Bank 0", "id":3, "details":[{"type":"table", "Bank width":"32 bits", "Implemented size":"8192 bytes", "Number of replicates":"2", "Replicate ID(s) with pruned initializer":"0 and 1"}], "type":"bank", "children":[{"name":"Replicate 0", "id":4, "details":[{"type":"table", "Width":"32 bits", "Depth":"1024 words", "Size":"4096 bytes", "Additional Information":"50 % of ROM contents were pruned away based on the access pattern of the load site."}], "type":"replicate", "children":[{"name":"R", "id":5, "type":"port"}]}, {"name":"Replicate 1", "id":6, "details":[{"type":"table", "Width":"32 bits", "Depth":"1024 words", "Size":"4096 bytes", "Additional Information":"50 % of ROM contents were pruned away based on the access pattern of the load site."}], "type":"replicate", "children":[{"name":"R", "id":7, "type":"port"}]}]}]}, {"name":"rand", "id":8, "details":[{"type":"table", "Declared at":[{"type":"text", "text":"%L", "links":[{"filename":"test_WACK.cl", "line":"37"}]}]}], "debug":[[{"filename":"test_WACK.cl", "line":37}]], "type":"unsynth"}]}, {"name":"Load", "id":4003878952, "details":[{"type":"table", "Data width":"32 bits", "Type":"ROM lookup", "Loads from":"Unknown ROM (address space 6)"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Load", "id":4003882696, "details":[{"type":"table", "Data width":"32 bits", "Type":"ROM lookup", "Loads from":"Unknown ROM (address space 6)"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}]}], "links":[{"from":4003878952, "to":5}, {"from":4003882696, "to":7}]}';
var systemJSON='{}';
var blockJSON='{"4003798176":{"nodes":[{"name":"Cluster 1", "id":4006851520, "start":"0", "end":"2.9e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_random_accesss_c0_enter_test_random_access4", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"293"}], "type":"bb", "children":[{"name":"Logic", "id":4006858320, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"262"}], "type":"inst"}, {"name":"Exit", "id":4007110896, "details":[{"type":"table", "Exit Start Cycle":"262", "Exit Latency":"31", "Exit FIFO Depth":"512", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 2", "id":4007343184, "start":"5.5e+02", "end":"5.8e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_random_accesss_c2_enter_test_random_access11", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"549", "Cluster Latency":"36"}], "type":"bb", "children":[{"name":"Logic", "id":4007349712, "details":[{"type":"table", "Cluster Logic Start Cycle":"549", "Cluster Logic Latency":"5"}], "type":"inst"}, {"name":"Exit", "id":4007357520, "details":[{"type":"table", "Exit Start Cycle":"554", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"64", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 0", "id":4006464304, "start":"0", "end":"37", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_random_accesss_c1_enter_test_random_access1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"37"}], "type":"bb", "children":[{"name":"Logic", "id":4006471184, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"6"}], "type":"inst"}, {"name":"Exit", "id":4006821664, "details":[{"type":"table", "Exit Start Cycle":"6", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"Cluster 3", "id":4007378096, "start":"8e+02", "end":"8.4e+02", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c3_in_entry_test_random_accesss_c3_enter_test_random_access14", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"805", "Cluster Latency":"36"}], "type":"bb", "children":[{"name":"Logic", "id":4007384960, "details":[{"type":"table", "Cluster Logic Start Cycle":"805", "Cluster Logic Latency":"5"}], "type":"inst"}, {"name":"Exit", "id":4007393040, "details":[{"type":"table", "Exit Start Cycle":"810", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"64", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"ST", "id":4008706032, "start":"8.4e+02", "end":"9e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"841", "Latency":"64"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"ST", "id":4009070976, "start":"5.8e+02", "end":"8.4e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"585", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"LD", "id":4010168976, "start":"37", "end":"5.5e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"37", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"LD", "id":4010645904, "start":"2.9e+02", "end":"8e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"293", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"LD", "id":4010648256, "start":"37", "end":"5.5e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"37", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"LD", "id":4011374720, "start":"2.9e+02", "end":"8e+02", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"293", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}], "links":[{"from":4006858320, "to":4007110896}, {"from":4007349712, "to":4007357520}, {"from":4006471184, "to":4006821664}, {"from":4007384960, "to":4007393040}, {"from":4007110896, "to":4008706032, "details":[{"type":"table", "Width":"256"}]}, {"from":4007393040, "to":4008706032, "details":[{"type":"table", "Width":"64"}]}, {"from":4009070976, "to":4008706032, "details":[{"type":"table", "Width":"1"}]}, {"from":4006821664, "to":4009070976, "details":[{"type":"table", "Width":"256"}]}, {"from":4007357520, "to":4009070976, "details":[{"type":"table", "Width":"64"}]}, {"from":4010168976, "to":4007349712, "details":[{"type":"table", "Width":"32"}]}, {"from":4006821664, "to":4010168976, "details":[{"type":"table", "Width":"256"}]}, {"from":4010645904, "to":4007384960, "details":[{"type":"table", "Width":"32"}]}, {"from":4007110896, "to":4010645904, "details":[{"type":"table", "Width":"256"}]}, {"from":4010648256, "to":4007349712, "details":[{"type":"table", "Width":"32"}]}, {"from":4006821664, "to":4010648256, "details":[{"type":"table", "Width":"256"}]}, {"from":4011374720, "to":4007384960, "details":[{"type":"table", "Width":"32"}]}, {"from":4007110896, "to":4011374720, "details":[{"type":"table", "Width":"256"}]}]}}';
var scheduleJSON='{"4003631432":{"nodes":[{"name":"test_random_access.B0", "id":4003798176, "start":"0", "end":"905", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":4006464304, "start":"0", "end":"37", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c1_in_entry_test_random_accesss_c1_enter_test_random_access1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"37"}], "type":"cluster", "children":[{"name":"<<", "id":4007790160, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"And", "id":4009908064, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit And", "Constant Operand":"4092 (0xFFC)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Inttoptr", "id":4007224384, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"Inttoptr", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"ROM Lookup", "id":4011186464, "start":"0", "end":"2", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"0", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"x", "id":4008979696, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4008068672, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"z", "id":4009907088, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4010514816, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"y", "id":4018272992, "start":"0", "end":"6", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"6"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4010538032, "start":"3", "end":"6", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"3", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Exit", "id":4007044880, "start":"6", "end":"37", "details":[{"type":"table", "Exit Start Cycle":"6", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":4010648256, "start":"37", "end":"549", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"37", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"LD", "id":4010168976, "start":"37", "end":"549", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"37", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Cluster 2", "id":4007343184, "start":"549", "end":"585", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c2_in_entry_test_random_accesss_c2_enter_test_random_access11", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"549", "Cluster Latency":"36"}], "type":"cluster", "children":[{"name":"Hard FP +", "id":4010855824, "start":"549", "end":"554", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"549", "Latency":"5"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Exit", "id":4008992256, "start":"554", "end":"585", "details":[{"type":"table", "Exit Start Cycle":"554", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"64", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":4009070976, "start":"585", "end":"841", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"585", "Latency":"256"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Cluster 1", "id":4006851520, "start":"0", "end":"293", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_random_accesss_c0_enter_test_random_access4", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"293"}], "type":"cluster", "children":[{"name":"<<", "id":4007543632, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit Left Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"And", "id":4015081008, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"64-bit And", "Constant Operand":"2046 (0x7FE)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptr. Comp.", "id":4015081344, "start":"0", "end":"3", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"0", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Ptrtoint", "id":4009975504, "start":"3", "end":"3", "details":[{"type":"table", "Instruction":"64-bit Ptrtoint", "Start Cycle":"3", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":">>", "id":4011017680, "start":"3", "end":"256", "details":[{"type":"table", "Instruction":"64-bit Logical Right Shift", "Constant Operand":"1 (0x1)", "Start Cycle":"3", "Latency":"253"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"Inttoptr", "id":4010159312, "start":"256", "end":"256", "details":[{"type":"table", "Instruction":"Inttoptr", "Start Cycle":"256", "Latency":"0"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"ROM Lookup", "id":4010473792, "start":"256", "end":"258", "details":[{"type":"table", "Instruction":"On-chip Read-Only Memory Lookup", "Start Cycle":"256", "Latency":"2"}], "debug":[[{"filename":"test_WACK.cl", "line":42}]], "type":"inst"}, {"name":"y", "id":4009972112, "start":"0", "end":"262", "details":[{"type":"table", "Instruction":"Input Synchronization for \'y\'", "Start Cycle":"0", "Latency":"262"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4018701552, "start":"259", "end":"262", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"259", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"z", "id":4010539648, "start":"0", "end":"262", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"262"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4010033840, "start":"259", "end":"262", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"259", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"x", "id":4012368656, "start":"0", "end":"262", "details":[{"type":"table", "Instruction":"Input Synchronization for \'x\'", "Start Cycle":"0", "Latency":"262"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":4009927184, "start":"259", "end":"262", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"259", "Latency":"3"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Exit", "id":4007048736, "start":"262", "end":"293", "details":[{"type":"table", "Exit Start Cycle":"262", "Exit Latency":"31", "Exit FIFO Depth":"512", "Exit FIFO Width":"256", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"LD", "id":4011374720, "start":"293", "end":"805", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"293", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"LD", "id":4010645904, "start":"293", "end":"805", "details":[{"type":"table", "Instruction":"Load", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"293", "Latency":"512"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Cluster 3", "id":4007378096, "start":"805", "end":"841", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c3_in_entry_test_random_accesss_c3_enter_test_random_access14", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"805", "Cluster Latency":"36"}], "type":"cluster", "children":[{"name":"Hard FP +", "id":4012839920, "start":"805", "end":"810", "details":[{"type":"table", "Instruction":"Hardened Floating-point Add", "Start Cycle":"805", "Latency":"5"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}, {"name":"Exit", "id":4018272000, "start":"810", "end":"841", "details":[{"type":"table", "Exit Start Cycle":"810", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"64", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":4008706032, "start":"841", "end":"905", "details":[{"type":"table", "Instruction":"Store", "Width":"32 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"841", "Latency":"64"}], "debug":[[{"filename":"test_WACK.cl", "line":49}]], "type":"inst"}]}], "links":[]}}';