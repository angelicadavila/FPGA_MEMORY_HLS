var pipelineJSON='{"455080960":{"nodes":[{"name":"Or", "id":455170208, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"4 (0x4)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Entry", "id":455382352, "details":[{"type":"table", "Instruction":"Cluster Entry", "Start Cycle":"0", "Latency":"0"}], "type":"inst"}, {"name":"Or", "id":456041712, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"3 (0x3)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":456181536, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"14 (0xE)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":456181872, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"15 (0xF)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456182208, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456182544, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456182880, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456183216, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456183552, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456183888, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456184224, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456184560, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456184896, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456185232, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456185568, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456185904, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456186240, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Convert", "id":456186576, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Exit", "id":456299152, "start":"11", "end":"42", "details":[{"type":"table", "Exit Start Cycle":"11", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"640", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}, {"name":"Or", "id":456744480, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456875344, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"<<", "id":460139792, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"4 (0x4)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":460248128, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461257600, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"5 (0x5)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461257936, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"6 (0x6)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461258272, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"7 (0x7)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461258608, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"8 (0x8)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461258944, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"9 (0x9)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461259280, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"10 (0xA)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461259616, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"11 (0xB)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461259952, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"12 (0xC)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Or", "id":461260288, "start":"0", "end":"1.2e-38", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"13 (0xD)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":461262336, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"z", "id":461263008, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"11"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":461265504, "start":"8", "end":"11", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"8", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}], "links":[{"from":455170208, "to":456875344, "details":[{"type":"table", "Width":"32"}]}, {"from":455382352, "to":460139792, "details":[{"type":"table", "Width":"128"}]}, {"from":456041712, "to":456182880, "details":[{"type":"table", "Width":"32"}]}, {"from":456181536, "to":456186240, "details":[{"type":"table", "Width":"32"}]}, {"from":456181872, "to":456186576, "details":[{"type":"table", "Width":"32"}]}, {"from":456182208, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456182544, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456182880, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456183216, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456183552, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456183888, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456184224, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456184560, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456184896, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456185232, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456185568, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456185904, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456186240, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456186576, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":456744480, "to":456182544, "details":[{"type":"table", "Width":"32"}]}, {"from":456875344, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":455170208, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":456041712, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":456181536, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":456181872, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":456744480, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":460248128, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461257600, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461257936, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461258272, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461258608, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461258944, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461259280, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461259616, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461259952, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461260288, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461262336, "details":[{"type":"table", "Width":"32"}]}, {"from":460139792, "to":461265504, "details":[{"type":"table", "Width":"32"}]}, {"from":460248128, "to":456182208, "details":[{"type":"table", "Width":"32"}]}, {"from":461257600, "to":456183216, "details":[{"type":"table", "Width":"32"}]}, {"from":461257936, "to":456183552, "details":[{"type":"table", "Width":"32"}]}, {"from":461258272, "to":456183888, "details":[{"type":"table", "Width":"32"}]}, {"from":461258608, "to":456184224, "details":[{"type":"table", "Width":"32"}]}, {"from":461258944, "to":456184560, "details":[{"type":"table", "Width":"32"}]}, {"from":461259280, "to":456184896, "details":[{"type":"table", "Width":"32"}]}, {"from":461259616, "to":456185232, "details":[{"type":"table", "Width":"32"}]}, {"from":461259952, "to":456185568, "details":[{"type":"table", "Width":"32"}]}, {"from":461260288, "to":456185904, "details":[{"type":"table", "Width":"32"}]}, {"from":461262336, "to":456299152, "details":[{"type":"table", "Width":"32"}]}, {"from":461263008, "to":461265504, "details":[{"type":"table", "Width":"64"}]}, {"from":461265504, "to":456299152, "details":[{"type":"table", "Width":"64"}]}]}}';
var treeJSON='{"nodes":[{"name":"test_multiplereads", "id":452443944, "type":"kernel", "children":[{"name":"test_multiplereads.B0", "id":452656000, "type":"bb", "children":[{"name":"Cluster 0", "id":455080960, "type":"cluster"}]}]}], "links":[]}';
var new_lmvJSON='{"nodes":[], "links":[]}';
var systemJSON='{}';
var blockJSON='{"452656000":{"nodes":[{"name":"Cluster 0", "id":455080960, "start":"0", "end":"42", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"42"}], "type":"bb", "children":[{"name":"Logic", "id":455087568, "details":[{"type":"table", "Cluster Logic Start Cycle":"0", "Cluster Logic Latency":"11"}], "type":"inst"}, {"name":"Exit", "id":455222144, "details":[{"type":"table", "Exit Start Cycle":"11", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"640", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"bb"}]}, {"name":"ST", "id":456644688, "start":"42", "end":"1.1e+02", "details":[{"type":"table", "Instruction":"Store", "Width":"512 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"42", "Latency":"64"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}], "links":[{"from":455087568, "to":455222144}, {"from":455222144, "to":456644688, "details":[{"type":"table", "Width":"640"}]}]}}';
var scheduleJSON='{"452443944":{"nodes":[{"name":"test_multiplereads.B0", "id":452656000, "start":"0", "end":"106", "details":[{"type":"table"}], "type":"bb", "children":[{"name":"Cluster 0", "id":455080960, "start":"0", "end":"42", "details":[{"type":"table", "Cluster Name":"i_sfc_s_c0_in_entry_test_multiplereadss_c0_enter_test_multiplereads1", "Cluster Type":"Stall-Free", "Cluster Start Cycle":"0", "Cluster Latency":"42"}], "type":"cluster", "children":[{"name":"<<", "id":460139792, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Left Shift", "Constant Operand":"4 (0x4)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":461262336, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461260288, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"13 (0xD)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456185904, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461259952, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"12 (0xC)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456185568, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461259616, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"11 (0xB)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456185232, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461259280, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"10 (0xA)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456184896, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461258944, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"9 (0x9)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456184560, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461258608, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"8 (0x8)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456184224, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461258272, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"7 (0x7)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456183888, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461257936, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"6 (0x6)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456183552, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":461257600, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"5 (0x5)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456183216, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":460248128, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"1 (0x1)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456182208, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":456744480, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"2 (0x2)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456182544, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":456181872, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"15 (0xF)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456186576, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":456181536, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"14 (0xE)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456186240, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":456041712, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"3 (0x3)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456182880, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Or", "id":455170208, "start":"0", "end":"0", "details":[{"type":"table", "Instruction":"32-bit Or", "Constant Operand":"4 (0x4)", "Start Cycle":"0", "Latency":"0"}], "debug":[[{"filename":"test_bw10.cl", "line":28}]], "type":"inst"}, {"name":"Convert", "id":456875344, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"32-bit Integer to Floating-point Conversion", "Start Cycle":"0", "Latency":"11"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"z", "id":461263008, "start":"0", "end":"11", "details":[{"type":"table", "Instruction":"Input Synchronization for \'z\'", "Start Cycle":"0", "Latency":"11"}], "type":"inst"}, {"name":"Ptr. Comp.", "id":461265504, "start":"8", "end":"11", "details":[{"type":"table", "Instruction":"Pointer Computation", "Start Cycle":"8", "Latency":"3"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}, {"name":"Exit", "id":456299152, "start":"11", "end":"42", "details":[{"type":"table", "Exit Start Cycle":"11", "Exit Latency":"31", "Exit FIFO Depth":"64", "Exit FIFO Width":"640", "Details":"Exit FIFO depth is sized to accommodate all data that may be in-flight in the stall-free cluster; this depth will be equal to or greater than the latency of the cluster.  The width of the FIFO depends on the amount of data that needs to pass from the stall-free logic cluster to the stall-able logic below it."}], "type":"inst"}]}, {"name":"ST", "id":456644688, "start":"42", "end":"106", "details":[{"type":"table", "Instruction":"Store", "Width":"512 bits", "LSU Style":"Burst-coalesced", "Stall-free":"No", "Global Memory":"Yes", "Start Cycle":"42", "Latency":"64"}], "debug":[[{"filename":"test_bw10.cl", "line":31}]], "type":"inst"}]}], "links":[]}}';
