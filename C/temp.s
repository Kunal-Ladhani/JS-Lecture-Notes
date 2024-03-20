	.file	"temp.c"
	.text
	.section	.rodata
.LC0:
	.string	"%p \n"
.LC1:
	.string	"%li \n"
.LC2:
	.string	"a = %d\n"
.LC3:
	.string	"ptr1 = %p \n"
	.text
	.globl	main
	.type	main, @function
main:
.LFB6:
	.cfi_startproc
	endbr64
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$80, %rsp
	movl	%edi, -68(%rbp)
	movq	%rsi, -80(%rbp)
	movq	%fs:40, %rax
	movq	%rax, -8(%rbp)
	xorl	%eax, %eax
	movl	$27, -56(%rbp)
	movl	-56(%rbp), %eax
	cltq
	movq	%rax, %rdi
	call	malloc@PLT
	movq	%rax, -40(%rbp)
	movl	$97, -44(%rbp)
	movl	$0, -48(%rbp)
	jmp	.L2
.L3:
	movl	-44(%rbp), %eax
	leal	1(%rax), %edx
	movl	%edx, -44(%rbp)
	movl	-48(%rbp), %edx
	movslq	%edx, %rcx
	movq	-40(%rbp), %rdx
	addq	%rcx, %rdx
	movb	%al, (%rdx)
	addl	$1, -48(%rbp)
.L2:
	movl	-56(%rbp), %eax
	cmpl	%eax, -48(%rbp)
	jl	.L3
	movl	-56(%rbp), %eax
	movslq	%eax, %rdx
	movq	-40(%rbp), %rax
	addq	%rdx, %rax
	movb	$0, (%rax)
	movq	-40(%rbp), %rax
	movq	%rax, %rdi
	call	puts@PLT
	movq	-40(%rbp), %rax
	movq	%rax, %rdi
	call	free@PLT
	leaq	-56(%rbp), %rax
	movq	%rax, -32(%rbp)
	movq	-32(%rbp), %rax
	movq	%rax, %rsi
	leaq	.LC0(%rip), %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$8, %esi
	leaq	.LC1(%rip), %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	$10, -52(%rbp)
	leaq	-52(%rbp), %rax
	movq	%rax, -24(%rbp)
	movl	-52(%rbp), %eax
	movl	%eax, %esi
	leaq	.LC2(%rip), %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	printf@PLT
	movq	-24(%rbp), %rax
	movq	%rax, %rsi
	leaq	.LC3(%rip), %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	-52(%rbp), %eax
	cltq
	salq	$2, %rax
	movq	%rax, %rdi
	call	malloc@PLT
	movq	%rax, -16(%rbp)
	movq	-16(%rbp), %rax
	movq	%rax, %rdi
	call	free@PLT
	movl	$0, %eax
	movq	-8(%rbp), %rdx
	subq	%fs:40, %rdx
	je	.L5
	call	__stack_chk_fail@PLT
.L5:
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE6:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 8
	.long	1f - 0f
	.long	4f - 1f
	.long	5
0:
	.string	"GNU"
1:
	.align 8
	.long	0xc0000002
	.long	3f - 2f
2:
	.long	0x3
3:
	.align 8
4:
