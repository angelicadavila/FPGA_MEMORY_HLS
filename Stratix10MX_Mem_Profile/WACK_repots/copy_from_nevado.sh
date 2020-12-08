#!/bin/sh

#kernel_dir=/home/angelica/Documents/exm_GX/exm_opencl_test_access/test_access/device
kernel_dir=/mnt/extra/Angelica/exm_binary/stratixMX/exm_MX

kernel_base_name=testMX_WACK

for V in 16 8 4 2
do
	for IN in 0 1 2 3 4
	do

	kernel_name="$kernel_base_name"_"$V"_"$IN"
	scp -r angelica@nevado.unizar.es:"$kernel_dir"/"$kernel_name"/reports ./"$kernel_name"/
	scp -r angelica@nevado.unizar.es:"$kernel_dir"/"$kernel_name"/quartus_sh_compile.log ./"$kernel_name"/
	scp angelica@nevado.unizar.es:"$kernel_dir"/"$kernel_name"/acl_quartus_report.txt ./"$kernel_name"/
	done
done
