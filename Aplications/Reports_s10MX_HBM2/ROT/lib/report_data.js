var areaJSON='{"columns":["", "ALUTs", "FFs", "RAMs", "DSPs", "MLABs", "Details"], "debug_enabled":"true", "type":"module", "total_percent":[6.61017, 3.04958, 3.67493, 6.77669, 6.46465], "total":[38540, 103298, 464, 256, 216], "name":"Kernel System", "max_resources":[1405440, 2810880, 6847, 3960, 70272], "children":[{"name":"Static Partition", "type":"partition", "children":[{"name":"Board interface", "type":"resource", "data":[13132, 20030, 112, 0, 0], "details":[{"type":"text", "text":"Platform interface logic."}]}]}, {"name":"Global interconnect", "type":"resource", "data":[5904, 6443, 0, 0, 0], "details":[{"type":"text", "text":"Global interconnect for 2 global loads and 2 global stores. Reduce number of global loads and stores to simplify global interconnect."}, {"type":"brief", "text":"For 2 global loads and 2 global stores."}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Global Memory Interconnect", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}]}]}, {"name":"System description ROM", "type":"resource", "data":[2, 71, 2, 0, 0], "details":[{"type":"text", "text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program."}, {"type":"brief", "text":"Contains information for the host."}]}, {"name":"streaming_rot", "compute_units":1, "type":"function", "total_percent":[4.43084, 1.69499, 2.7306, 5.11173, 6.46465], "total_kernel_resources":[19502, 76754, 350, 256, 216], "details":[{"type":"text", "text":"Number of compute units: 1"}, {"type":"text", "text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}, {"type":"brief", "text":"1 compute unit.\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality."}], "children":[{"name":"Function overhead", "type":"resource", "data":[1463, 1467, 0, 0, 6], "details":[{"type":"text", "text":"Kernel dispatch logic."}, {"type":"brief", "text":"Kernel dispatch logic."}]}, {"name":"Private Variable: \\n - \'i\' (rot_mx.cl:41)", "type":"resource", "data":[16, 130, 0, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":41}]], "details":[{"type":"text", "text":"Type: Register"}, {"type":"text", "text":"1 register of width 32"}, {"type":"text", "text":"1 register of width 33"}, {"type":"brief", "text":"Register,\\n1 reg, 32 width,\\n1 reg, 33 width"}]}, {"name":"streaming_rot.B0", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[0, 165, 0, 0, 0], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[0, 131, 0, 0, 0]}, {"name":"rot_mx.cl:41", "type":"resource", "data":[0, 34, 0, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":41}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[10, 9, 1, 0, 0], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"rot_mx.cl:35", "type":"resource", "data":[64, 0, 0, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":35}]], "children":[{"name":"32-bit Integer Add", "type":"resource", "count":2, "data":[64, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"rot_mx.cl:41", "type":"resource", "data":[84, 1, 0, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":41}]], "children":[{"name":"32-bit Integer Compare", "type":"resource", "count":2, "data":[35, 1, 0, 0, 0]}, {"name":"32-bit Select", "type":"resource", "count":1, "data":[16, 0, 0, 0, 0]}, {"name":"33-bit Integer Add", "type":"resource", "count":1, "data":[33, 0, 0, 0, 0]}], "replace_name":"true"}]}]}, {"name":"streaming_rot.B1", "type":"basicblock", "children":[{"name":"State", "type":"resource", "data":[124, 4650, 9, 0, 4], "details":[{"type":"brief", "text":"Live values and control logic"}, {"type":"text", "text":"Resources for live values and control logic. To reduce this area:", "details":[{"type":"text", "text":"reduce size of local variables"}, {"type":"text", "text":"reduce scope of local variables, localizing them as much as possible"}, {"type":"text", "text":"reduce number of nested loops"}]}], "children":[{"name":"No Source Line", "type":"resource", "data":[124, 4650, 9, 0, 4]}]}, {"name":"Feedback", "type":"resource", "data":[49, 9, 0, 0, 0], "details":[{"type":"brief", "text":"Loop-carried dependencies"}, {"type":"text", "text":"Resources for loop-carried dependencies. To reduce this area:", "details":[{"type":"text", "text":"reduce number and size of loop-carried variables"}]}], "children":[{"name":"rot_mx.cl:41", "type":"resource", "data":[49, 9, 0, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":41}]]}]}, {"name":"Cluster logic", "type":"resource", "data":[2236, 4440, 112, 0, 0], "details":[{"type":"brief", "text":"Logic required to efficiently support sets of operations that do not stall"}, {"type":"text", "text":"Logic required to efficiently support sets of operations that do not stall. This area cannot be affected directly."}]}, {"name":"Computation", "type":"resource", "children":[{"name":"rot_mx.cl:41", "type":"resource", "data":[106, 1, 0, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":41}]], "children":[{"name":"1-bit And", "type":"resource", "count":2, "data":[2, 0, 0, 0, 0]}, {"name":"1-bit Xor", "type":"resource", "count":2, "data":[1, 1, 0, 0, 0]}, {"name":"32-bit Integer Add", "type":"resource", "count":1, "data":[32, 0, 0, 0, 0]}, {"name":"33-bit Integer Add", "type":"resource", "count":1, "data":[33, 0, 0, 0, 0]}, {"name":"33-bit Integer Compare", "type":"resource", "count":1, "data":[11, 0, 0, 0, 0]}, {"name":"33-bit Select", "type":"resource", "count":2, "data":[27, 0, 0, 0, 0]}], "replace_name":"true"}, {"name":"rot_mx.cl:46", "type":"resource", "data":[1597, 13433, 54, 0, 103], "debug":[[{"filename":"rot_mx.cl", "line":46}]], "children":[{"name":"Load", "type":"resource", "count":1, "data":[1597, 13433, 54, 0, 103], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}, {"name":"rot_mx.cl:47", "type":"resource", "data":[1597, 13433, 54, 0, 103], "debug":[[{"filename":"rot_mx.cl", "line":47}]], "children":[{"name":"Load", "type":"resource", "count":1, "data":[1597, 13433, 54, 0, 103], "details":[{"type":"text", "text":"Load uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}, {"name":"rot_mx.cl:49", "type":"resource", "data":[5120, 10240, 0, 128, 0], "debug":[[{"filename":"rot_mx.cl", "line":49}]], "children":[{"name":"Hardened Dot Product of Size 2", "type":"resource", "count":128, "data":[5120, 10240, 0, 128, 0]}], "replace_name":"true"}, {"name":"rot_mx.cl:50", "type":"resource", "data":[5120, 10240, 0, 128, 0], "debug":[[{"filename":"rot_mx.cl", "line":50}]], "children":[{"name":"Hardened Dot Product of Size 2", "type":"resource", "count":128, "data":[5120, 10240, 0, 128, 0]}], "replace_name":"true"}, {"name":"rot_mx.cl:51", "type":"resource", "data":[958, 9268, 60, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":51}]], "children":[{"name":"Store", "type":"resource", "count":1, "data":[958, 9268, 60, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}, {"name":"rot_mx.cl:52", "type":"resource", "data":[958, 9268, 60, 0, 0], "debug":[[{"filename":"rot_mx.cl", "line":52}]], "children":[{"name":"Store", "type":"resource", "count":1, "data":[958, 9268, 60, 0, 0], "details":[{"type":"text", "text":"Store uses a Burst-coalesced LSU"}, {"type":"brief", "text":"Burst-coalesced LSU"}]}], "replace_name":"true"}]}]}]}]}';
var area_srcJSON='{"children":[{"children":[{"data":[13132,20030,112,0,0],"details":[{"text":"Platform interface logic.","type":"text"}],"name":"Board interface","type":"resource"}],"name":"Static Partition","type":"partition"},{"data":[5904,6443,0,0,0],"details":[{"text":"Global interconnect for 2 global loads and 2 global stores. Reduce number of global loads and stores to simplify global interconnect.","type":"text"},{"text":"For 2 global loads and 2 global stores.","type":"brief"},{"links":[{"guide":"Best Practices Guide : Global Memory Interconnect","link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#hnj1476724450050"}],"text":"See %L for more information","type":"text"}],"name":"Global interconnect","type":"resource"},{"data":[2,71,2,0,0],"details":[{"text":"This read-only memory contains information for the host about the system and about each kernel in the system, including kernel names, arguments, and attributes. The system description ROM ensures that the binary image on the FPGA is compatible with the host program.","type":"text"},{"text":"Contains information for the host.","type":"brief"}],"name":"System description ROM","type":"resource"},{"children":[{"data":[2295,4458,113,0,0],"details":[{"text":"Feedback+Cluster logic","type":"brief"}],"name":"Data control overhead","type":"resource"},{"data":[1463,1467,0,0,6],"details":[{"text":"Kernel dispatch logic.","type":"text"},{"text":"Kernel dispatch logic.","type":"brief"}],"name":"Function overhead","type":"resource"},{"data":[16,130,0,0,0],"details":[{"text":"Type: Register","type":"text"},{"text":"1 register of width 32","type":"text"},{"text":"1 register of width 33","type":"text"},{"text":"Register,\\n1 reg, 32 width,\\n1 reg, 33 width","type":"brief"}],"name":"Private Variable: \\n - \'i\' (rot_mx.cl:41)","type":"resource"},{"children":[{"count":2,"data":[124,4781,9,0,4],"debug":[[{"filename":"","line":0}]],"name":"State","type":"resource"}],"data":[124,4781,9,0,4],"name":"No Source Line","type":"resource"},{"children":[{"count":1,"data":[0,34,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"State","type":"resource"},{"count":2,"data":[35,1,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"32-bit Integer Compare","type":"resource"},{"count":1,"data":[16,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"32-bit Select","type":"resource"},{"count":2,"data":[66,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"33-bit Integer Add","type":"resource"},{"count":2,"data":[2,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"1-bit And","type":"resource"},{"count":2,"data":[1,1,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"1-bit Xor","type":"resource"},{"count":1,"data":[32,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"32-bit Integer Add","type":"resource"},{"count":1,"data":[11,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"33-bit Integer Compare","type":"resource"},{"count":2,"data":[27,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"33-bit Select","type":"resource"}],"data":[190,36,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":41}]],"name":"rot_mx.cl:41","type":"resource"},{"children":[{"count":2,"data":[64,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":35}]],"name":"32-bit Integer Add","type":"resource"}],"data":[64,0,0,0,0],"debug":[[{"filename":"rot_mx.cl","line":35}]],"name":"rot_mx.cl:35","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[1597,13433,54,0,103],"debug":[[{"filename":"rot_mx.cl","line":46}]],"name":"Load","type":"resource"}],"data":[1597,13433,54,0,103],"debug":[[{"filename":"rot_mx.cl","line":46}]],"name":"rot_mx.cl:46","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[1597,13433,54,0,103],"debug":[[{"filename":"rot_mx.cl","line":47}]],"name":"Load","type":"resource"}],"data":[1597,13433,54,0,103],"debug":[[{"filename":"rot_mx.cl","line":47}]],"name":"rot_mx.cl:47","replace_name":"true","type":"resource"},{"children":[{"count":128,"data":[5120,10240,0,128,0],"debug":[[{"filename":"rot_mx.cl","line":49}]],"name":"Hardened Dot Product of Size 2","type":"resource"}],"data":[5120,10240,0,128,0],"debug":[[{"filename":"rot_mx.cl","line":49}]],"name":"rot_mx.cl:49","replace_name":"true","type":"resource"},{"children":[{"count":128,"data":[5120,10240,0,128,0],"debug":[[{"filename":"rot_mx.cl","line":50}]],"name":"Hardened Dot Product of Size 2","type":"resource"}],"data":[5120,10240,0,128,0],"debug":[[{"filename":"rot_mx.cl","line":50}]],"name":"rot_mx.cl:50","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[958,9268,60,0,0],"debug":[[{"filename":"rot_mx.cl","line":51}]],"name":"Store","type":"resource"}],"data":[958,9268,60,0,0],"debug":[[{"filename":"rot_mx.cl","line":51}]],"name":"rot_mx.cl:51","replace_name":"true","type":"resource"},{"children":[{"count":1,"data":[958,9268,60,0,0],"debug":[[{"filename":"rot_mx.cl","line":52}]],"name":"Store","type":"resource"}],"data":[958,9268,60,0,0],"debug":[[{"filename":"rot_mx.cl","line":52}]],"name":"rot_mx.cl:52","replace_name":"true","type":"resource"}],"compute_units":1,"data":[19502,76754,350,256,216],"debug":[[{"filename":"rot_mx.cl","line":41}]],"details":[{"text":"Number of compute units: 1","type":"text"},{"text":"Kernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"text"},{"text":"1 compute unit.\\nKernel attribute \'uses_global_work_offset\' not specified. Add \'__attribute__((uses_global_work_offset(0)))\' to reduce area utilization if the kernel will always be enqueued with a 0 or NULL global_work_offset argument in clEnqueueNDRangeKernel. Add \'__attribute__((uses_global_work_offset(1)))\' to hide this suggestion without affecting kernel functionality.","type":"brief"}],"name":"streaming_rot","total_kernel_resources":[19502,76754,350,256,216],"total_percent":[4.43084,1.69499,2.7306,5.11173,6.46465],"type":"function"}],"columns":["","ALUTs","FFs","RAMs","DSPs","MLABs","Details"],"data":[25408,83268,352,256,216],"debug_enabled":"true","max_resources":[1405440,2810880,6847,3960,70272],"name":"Kernel System","total":[38540,103298,464,256,216],"total_percent":[6.61017,3.04958,3.67493,6.77669,6.46465],"type":"module"}';
var mavJSON='{"nodes":[{"type":"kernel", "id":2, "name":"streaming_rot", "children":[{"type":"bb", "id":3, "name":"streaming_rot.B0", "details":[{"type":"table", "Latency":"36"}]}, {"type":"bb", "id":4, "name":"streaming_rot.B1", "children":[{"type":"inst", "id":6, "name":"Load", "debug":[[{"filename":"rot_mx.cl", "line":46}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"39", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":7, "name":"Load", "debug":[[{"filename":"rot_mx.cl", "line":47}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"39", "Latency":"512", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":8, "name":"Store", "debug":[[{"filename":"rot_mx.cl", "line":51}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"590", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":9, "name":"Store", "debug":[[{"filename":"rot_mx.cl", "line":52}]], "details":[{"type":"table", "Width":"2048 bits", "Type":"Burst-coalesced", "Stall-free":"No", "Start Cycle":"590", "Latency":"64", "Reference":[{"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Load-Store Units", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#yeo1491314105959"}]}]}]}, {"type":"inst", "id":10, "name":"Loop Input", "debug":[[{"filename":"rot_mx.cl", "line":41}]], "details":[{"type":"table", "Start Cycle":"0", "Latency":"1", "Loops To":"11"}]}, {"type":"inst", "id":11, "name":"Loop End", "details":[{"type":"table", "Start Cycle":"654", "Latency":"1"}]}], "details":[{"type":"table", "Latency":"654", "II":"1", "Subloops":"No", "Pipelined":"Yes", "Fmax Bottlenecks":"No", "Loop Info":""}]}, {"type":"bb", "id":5, "name":"streaming_rot.B2", "details":[{"type":"table", "Latency":"0"}]}]}, {"type":"memtype", "id":1, "name":"Global Memory", "children":[{"type":"memsys", "id":12, "name":"HBM1", "details":[{"type":"table", "Number of banks":"1"}]}, {"type":"memsys", "id":13, "name":"HBM4", "details":[{"type":"table", "Number of banks":"1"}]}, {"type":"memsys", "id":14, "name":"HBM2", "details":[{"type":"table", "Number of banks":"1"}]}, {"type":"memsys", "id":15, "name":"HBM3", "details":[{"type":"table", "Number of banks":"1"}]}]}], "links":[{"from":3, "to":10}, {"from":6, "to":11}, {"from":7, "to":11}, {"from":8, "to":11}, {"from":9, "to":11}, {"from":11, "to":5}, {"from":10, "to":6}, {"from":10, "to":7}, {"from":6, "to":8}, {"from":7, "to":8}, {"from":6, "to":9}, {"from":7, "to":9}, {"from":12, "to":6}, {"from":9, "to":13}, {"from":14, "to":7}, {"from":8, "to":15}]}';
var loopsJSON='{"columns":["", "Pipelined", "II", "Speculated iterations", "Details"], "children":[{"name":"Kernel: streaming_rot", "data":["", "", ""], "debug":[[{"filename":"rot_mx.cl", "line":29}]], "details":[{"type":"brief", "text":"Single work-item execution"}, {"type":"text", "text":"Single work-item execution"}, {"type":"text", "text":"Fmax bottlenck block: None"}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Kernels", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#ipp1476408832230"}]}], "children":[{"name":"streaming_rot.B1", "data":["Yes", "~1", "4"], "debug":[[{"filename":"rot_mx.cl", "line":41}]], "details":[{"type":"brief", "text":" "}, {"type":"text", "text":"Hyper-Optimized loop structure: enabled."}, {"type":"text", "text":"II is an approximation due to the following stallable instructions:", "details":[{"type":"text", "text":"Load Operation (%L)", "links":[{"filename":"rot_mx.cl", "line":"46"}]}, {"type":"text", "text":"Load Operation (%L)", "links":[{"filename":"rot_mx.cl", "line":"47"}]}, {"type":"text", "text":"Store Operation (%L)", "links":[{"filename":"rot_mx.cl", "line":"51"}]}, {"type":"text", "text":"Store Operation (%L)", "links":[{"filename":"rot_mx.cl", "line":"52"}]}]}, {"type":"text", "text":"Maximum concurrent iterations: Capacity of loop", "details":[{"type":"text", "text":"Use the %L viewer to estimate capacity", "links":[{"view":"Fmax II Report"}]}]}, {"type":"text", "text":"See %L for more information", "links":[{"guide":"Best Practices Guide : Loops in a Single Work-Item Kernel", "link":"https://www.intel.com/content/www/us/en/programmable/documentation/mwh1391807516407.html#wfa1476380079940"}]}], "children":[{"name":"Fully unrolled loop", "data":["n/a", "n/a", "n/a"], "debug":[[{"filename":"rot_mx.cl", "line":44}]], "details":[{"type":"brief", "text":"Unrolled by #pragma unroll"}, {"type":"text", "text":"Unrolled by #pragma unroll"}], "children":[]}]}]}]}';
var fmax_iiJSON='{"basicblocks":{"streaming_rot.B0":{"name":"streaming_rot.B0", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":36, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}, "streaming_rot.B1":{"name":"streaming_rot.B1", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":654, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"Yes", "is_single_block_loop":"Yes", "loop_layer":1, "loop_location":{"details":[{"type":"text", "text":"Loop:  (%L)", "links":[{"filename":"rot_mx.cl", "line":"41"}]}]}}, "streaming_rot.B2":{"name":"streaming_rot.B2", "target_fmax":"Not specified", "target_ii":"Not specified", "achieved_fmax":"480.0", "achieved_ii":1, "latency":0, "max_interleaving":1, "is_fmax_bottleneck":"No", "is_loop_header":"No", "is_single_block_loop":"No", "loop_layer":0, "loop_location":{}}}, "functions":{"streaming_rot":{"debug":[{"filename":"rot_mx.cl", "line":29}], "loop_hierachy":{"streaming_rot__no_loop":["streaming_rot.B0", "streaming_rot.B2"], "streaming_rot.B1":["streaming_rot.B1"]}}}}';
var summaryJSON='{"performanceSummary":{"name":"Kernel Summary", "columns":["Kernel Name", "Kernel Type", "Autorun", "Workgroup Size", "# Compute Units", "Hyper-Optimized Handshaking"], "children":[{"name":"streaming_rot", "data":["Single work-item", "No", [1, 1, 1], 1, "On"], "details":[{"type":"text", "text":"Kernel type: Single work-item"}, {"type":"text", "text":"Required workgroup size: (1, 1, 1)"}, {"type":"text", "text":"Maximum workgroup size: 1"}], "debug":[[{"filename":"rot_mx.cl", "line":29}]]}]}, "estimatedResources":{"name":"Estimated Resource Usage", "columns":["Kernel Name", "ALUTs ", "FFs  ", "RAMs ", "DSPs ", "MLABs"], "children":[{"name":"streaming_rot", "data":[19502, 76754, 350, 256, 216], "debug":[[{"filename":"rot_mx.cl", "line":29}]]}, {"name":"Global Interconnect", "classes":["summary-highlight", "nohover"], "data":[5904, 6443, 0, 0, 0]}, {"name":"Board Interface", "classes":["summary-highlight", "nohover"], "data":[13132, 20030, 112, 0, 0]}, {"name":"System description ROM", "classes":["summary-highlight", "nohover"], "data":[2, 71, 2, 0, 0]}, {"name":"Total", "classes":["summary-highlight", "nohover"], "data":[38540, 103298, 464, 256, 216], "data_percent":[2.7422, 3.67493, 6.77669, 6.46465]}, {"name":"Available", "classes":["summary-highlight", "nohover"], "data":[1405440, 2810880, 6847, 3960, 0]}]}, "compileWarnings":{"name":"Compile Warnings", "children":[]}}';
var infoJSON='{"name":"Info","rows":[{"classes":["info-table"],"data":["rot_mx"],"name":"Project Name"},{"data":["Stratix 10, 1SM21BHU2F53E2VGS1, s10mx_ref:s10mx_hbm_es"],"name":"Target Family, Device, Board"},{"data":["19.4.0 Build 64"],"name":"AOC Version"},{"data":["19.4.0 Build 64 Pro"],"name":"Quartus Version"},{"data":["aoc -v -v -board-package=/mnt/extra/Angelica/exm_binary/stratixMX/BSPMX/s10mx_ref rot_mx.cl"],"name":"Command"},{"data":["Mon Aug 24 14:35:27 2020"],"name":"Reports Generated At"}]}';
var warningsJSON='{"rows":[]}';
var quartusJSON='{"quartusFitClockSummary":{  "name":"Quartus Fit Clock Summary"  ,"columns":["", "Kernel fmax"]  ,"children":[  {    "name":"Frequency (MHz)","data":[423.33]  }]},"quartusFitResourceUsageSummary":{  "name":"Quartus Fit Resource Utilization Summary"  ,"columns":["", "ALMs", "FFs", "RAMs", "DSPs", "MLABs"]  ,"children":[  {"name":"streaming_rot","data":[27253.8 ,107654 ,337 ,256 ,207]  }]}}';
var fileJSON=[{"path":"/mnt/extra/Angelica/exm_binary/FBLAS/ROT/rot_mx.cl", "name":"rot_mx.cl", "has_active_debug_locs":false, "absName":"/mnt/extra/Angelica/exm_binary/FBLAS/ROT/rot_mx.cl", "content":"/*\012    FBLAS: BLAS implementation for Intel FPGA\012    Copyright (c) 2019 ETH-Zurich. All rights reserved.\012    See LICENSE for license information.\012    ROT - applies a plan rotation\012    Data is received from two input streams\012    CHANNEL_VECTOR_X and CHANNEL_VECTOR_Y having the proper type.\012    Data elements must be streamed with a padding equal to W\012    (padding data must be set to zero).\012    Result is streamed in an output channel at the end of the computation\012    in two channels CHANNEL_OUT_X (for x) and CHANNEL_OUT_Y (for y)\012*/\012\012//FBLAS_PARAMETERS_START\012\012//#define DOUBLE_PRECISION      //enable for drot\012#define W 64		    	//width\012\012//namings\012#define KERNEL_NAME streaming_rot\012\012//architecture\012#define __STRATIX_10__\012\012//FBLAS_PARAMETERS_END\012\012\012\012__kernel void KERNEL_NAME( 	global __attribute((buffer_location(\"HBM1\"))) float* restrict VECTOR_X,\012							global __attribute((buffer_location(\"HBM2\"))) float* restrict VECTOR_Y,\012							global __attribute((buffer_location(\"HBM3\"))) float* restrict VECTOR_OUT_X,\012							global __attribute((buffer_location(\"HBM4\"))) float* restrict VECTOR_OUT_Y,\012							const int N, const float c, const float s)\012{\012    const int outer_loop_limit=1+(int)((N-1)/W); //ceiling\012    float x[W];\012    float y[W];\012    float out_x[W];\012    float out_y[W];\012\012    for(int i=0; i<outer_loop_limit; i++)\012    {\012        #pragma unroll\012        for(int j=0;j<W;j++)\012        {\012            x[j]=VECTOR_X[W*i+j];\012            y[j]=VECTOR_Y[W*i+j];\012\012            out_x[j] = c * x[j] + s * y[j];\012            out_y[j] = -s * x[j] + c * y[j];\012            VECTOR_OUT_X[W*i+j]=out_x[j];\012            VECTOR_OUT_Y[W*i+j]=out_y[j];\012        }\012    }\012}\012"}];
